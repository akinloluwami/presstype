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

  const file = req.body.file;
  const fileName = req.body.fileName;

  if (!file) {
    res.status(400).send("No file");
    return;
  }

  if (!fileName) {
    res.status(400).send("No fileName");
    return;
  }

  const base64Data = file.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");

  const params: {
    Bucket: string;
    Key: string;
    Body: any;
  } = {
    Bucket: process.env.AWS_BUCKET_NAME as string,
    Key: fileName,
    Body: buffer,
  };

  // Upload the file to S3
  try {
    const result = await s3.send(new PutObjectCommand(params));
    console.log(result);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export default allowMethods(["POST"])(handler);
