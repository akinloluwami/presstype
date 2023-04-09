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

  const body = JSON.parse(req.body);

  const file = Buffer.from(
    body.file.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );
  const fileName = body.fileName;

  if (!file) {
    res.status(400).send("No file");
    return;
  }

  if (!fileName) {
    res.status(400).send("No fileName");
    return;
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME as string,
    Key: fileName,
    Body: file,
  };

  try {
    const response = await s3.send(new PutObjectCommand(params));
    console.log("File uploaded successfully. ", response);
    res.status(200).json({ success: true });
  } catch (err: any) {
    console.log("Error uploading file: ", err);
    res.status(500).send(err.message);
  }
};

export default allowMethods(["POST"])(handler);
