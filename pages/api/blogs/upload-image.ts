import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "@/middlewares/allowMethods";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";
import { v4 as uuid } from "uuid";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
  region: process.env.AWS_REGION as string,
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET_NAME as string,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      const extension = file.originalname.split(".").pop();
      const filename = `${uuid()}.${extension}`;
      cb(null, filename);
    },
  }),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    upload.single("file")(req, res, (err: any) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
        return;
      }

      const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${req.file.key}`;

      // Save fileUrl to database or return it to client
      res.status(200).json({ fileUrl });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default allowMethods(["POST"])(handler);
