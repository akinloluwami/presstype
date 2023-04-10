import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "@/middlewares/allowMethods";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const s3 = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
    region: process.env.AWS_REGION as string,
  });

  const storage = multer.memoryStorage();
  const upload = multer({ storage });

  const uploadToS3 = async (file: Express.Multer.File) => {
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET as string,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    try {
      const response = await s3.send(command);
      return response;
    } catch (error) {
      console.error("Couldn't upload the file: ", error);
      throw error;
    }
  };

  const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const s3 = new S3Client({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
      region: process.env.AWS_REGION as string,
    });

    await new Promise<void>((resolve, reject) => {
      upload.single("file")(req, res, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

    if (!req.file) {
      res.status(400).json({ error: "No file was provided" });
      return;
    }

    try {
      const response = await uploadToS3(req.file);
      res
        .status(200)
        .json({ message: "File uploaded successfully", data: response });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to upload file", details: error.message });
    }
  };
};

export default allowMethods(["POST"])(handler);
