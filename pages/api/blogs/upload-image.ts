import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "@/middlewares/allowMethods";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const s3 = new S3Client({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
      region: process.env.AWS_REGION as string,
    });

    const key = `uploads/${uuidv4()}`;
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME as string,
      Key: key,
      Body: req.body,
      ContentType: req.headers["content-type"],
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);

    return res
      .status(200)
      .json({ url: `${process.env.AWS_CLOUDFRONT_DOMAIN}/${key}` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to upload file" });
  }
};

export default allowMethods(["POST"])(handler);
