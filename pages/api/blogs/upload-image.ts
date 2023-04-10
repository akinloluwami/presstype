import { NextApiRequest, NextApiResponse } from "next";
import { allowMethods } from "@/middlewares/allowMethods";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const s3 = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
    region: process.env.AWS_REGION as string,
  });

  const file = req.file;
  const fileName = req.body.fileName;

  if (!file) {
    res.status(400).send("No file");
    return;
  }

  if (!fileName) {
    res.status(400).send("No fileName");
    return;
  }

  const buffer = file.buffer;

  const params: {
    Bucket: string;
    Key: string;
    Body: any;
  } = {
    Bucket: process.env.AWS_BUCKET_NAME as string,
    Key: fileName,
    Body: buffer,
  };

  try {
    const result = await s3.send(new PutObjectCommand(params));
    console.log(result);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

// export default allowMethods(["POST"])(upload.single("file"), handler);
export default allowMethods(["POST"])([upload.single("file"), handler]);
