import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ message: "Failed to upload file to S3" });
      return;
    }

    const { path, name, type } = files.file;
    const fileStream = fs.createReadStream(path);

    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: name,
      Body: fileStream,
      ContentType: type,
    };

    s3.upload(uploadParams, (err, data) => {
      if (err) {
        res.status(500).json({ message: "Failed to upload file to S3" });
        return;
      }

      res.status(200).json({ message: "File uploaded successfully" });
    });
  });
};
