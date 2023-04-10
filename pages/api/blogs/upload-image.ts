import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "@/middlewares/allowMethods";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const s3 = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
    region: process.env.AWS_REGION as string,
  });

  // Use the `upload` middleware to process the file upload
  upload.single("file")(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.status(400).send("Error uploading file");
    }

    // Get the uploaded file from `req.file`
    const file = req.file;

    // Create a `PutObjectCommand` to upload the file to S3
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME as string,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    });

    try {
      // Upload the file to S3
      const response = await s3.send(command);

      // Send the S3 object URL in the response
      res.status(200).send(response.Location);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error uploading file to S3");
    }
  });
};

export default allowMethods(["POST"])(handler);
