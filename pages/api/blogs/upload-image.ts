import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "@/middlewares/allowMethods";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const s3 = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
    region: process.env.AWS_REGION as string,
  });

  const file = Buffer.from(
    req.body.file.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );
  const fileName = req.body.fileName;

  if (!file) {
    res.status(400).send("No file");
    return;
  }

  if (!fileName) {
    res.status(400).send("No fileName");
    return;
  }

  const params: {
    Bucket: string;
    Key: string;
    Body: any;
    ContentType: string;
  } = {
    Bucket: process.env.AWS_BUCKET_NAME as string,
    Key: fileName,
    Body: file,
    ContentType: req.body.contentType,
  };

  const command = new PutObjectCommand(params);

  try {
    await s3.send(command);
    res.status(200).send("File uploaded successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to upload file");
  }
};

export default allowMethods(["POST"])(handler);
