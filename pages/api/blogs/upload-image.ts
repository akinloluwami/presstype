import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "@/middlewares/allowMethods";
import AWS from "aws-sdk";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
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

  const params: {
    Bucket: string;
    Key: string;
    Body: any;
  } = {
    Bucket: process.env.AWS_BUCKET_NAME as string,
    Key: fileName,
    Body: file,
  };

  s3.upload(params, (err: any, data: any) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).send(data);
    return;
  });
};

export default allowMethods(["POST"])(handler);
