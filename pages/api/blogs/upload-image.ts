import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import { allowMethods } from "@/middlewares/allowMethods";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

const s3 = new S3Client({ region: process.env.AWS_REGION });

const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // if (!req.headers.authorization) {
  //   res.status(401).json({ message: "Unauthorized" });
  //   return;
  // }

  try {
    await new Promise<void>((resolve, reject) => {
      upload.single("file")(req, res, async (err) => {
        if (err) {
          console.error("Error in file upload:", err);
          res.status(500).json({ message: "Failed to upload file to S3" });
          return reject(err);
        }

        const file = req.file;
        if (!file) {
          res.status(400).json({ message: "No file provided" });
          return reject(new Error("No file provided"));
        }

        const fileStream = fs.createReadStream(file.path);
        const key: string = file.originalname
          .toLowerCase()
          .replaceAll(" ", "-");
        const uploadParams = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: key,
          Body: fileStream,
          ContentType: file.mimetype,
        };

        const command = new PutObjectCommand(uploadParams);

        try {
          await s3.send(command);
          const url = `https://presstype.s3.amazonaws.com/${key}`;
          res.status(200).json({ message: "File uploaded successfully", url });
          resolve();
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: "Failed to upload file to S3" });
          reject(err);
        }
      });
    });
  } catch (error) {
    console.error("Error in file upload:", error);
    if (!res.writableEnded) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } finally {
    res.end();
  }
};

export default allowMethods(["POST"])(handler);
