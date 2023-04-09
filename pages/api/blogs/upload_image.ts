import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "@/middlewares/allowMethods";

//create a function to upload images to s3

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //s3 config

  const AWS = require("aws-sdk");
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  //get the image from the request

  const file = req.body.file;
  const fileName = req.body.fileName;

  //upload the image to s3

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: file,
  };

  s3.upload(params, (err: any, data: any) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  });
};

export default allowMethods(["POST"])(handler);
