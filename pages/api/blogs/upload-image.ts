import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "@/middlewares/allowMethods";
import { S3 } from "@aws-sdk/client-s3-node";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const s3 = new S3({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
    region: process.env.AWS_REGION as string,
  });

  try {
    const data = await s3.listBuckets({});
    const buckets = data?.Buckets.map((bucket) => bucket.Name);
    res.status(200).json(buckets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to list buckets" });
  }
};

export default allowMethods(["GET"])(handler);
