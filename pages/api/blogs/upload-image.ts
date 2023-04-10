import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "@/middlewares/allowMethods";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { ListBucketsCommand } from "@aws-sdk";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const s3 = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
    region: process.env.AWS_REGION as string,
  });

  const command = new ListBucketsCommand({});
  const response = s3.send(command);
  res.send((await response).Buckets);
};

export default allowMethods(["POST"])(handler);
