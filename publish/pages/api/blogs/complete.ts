import { allowMethods } from "@/middlewares/allowMethods";
import Blog from "@/schema/Blog";
import { NextApiRequest, NextApiResponse } from "next";
import DecodedToken from "@/interfaces/DecodedToken";
import decodeToken from "@/utils/decode_token";
import Author from "@/schema/Author";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.headers.authorization) {
    res.status(401).json({
      message: "Unauthorized request",
    });
    return;
  }
  const token = req.headers.authorization.split(" ")[1];

  const decoded: DecodedToken | null = decodeToken(token as string);

  if (!decoded) {
    res.status(400).send("Token expired");
    return;
  }

  const author = await Author.findOne({ email: decoded.email });

  if (!author) {
    res.status(404).json({ message: "No account associated with this email" });
    return;
  }

  // if (blog.is_onboarding_complete) {
  //   res.status(400).json({
  //     message: "You have previously setup your PressType. Login instead.",
  //   });
  //   return;
  // }

  const { subdomain, title, description, author_name, author_bio } = req.body;

  if (!subdomain || !title) {
    res.status(400).json({ message: "Subdomain and title are required" });
    return;
  }

  const subdomainExists = await Blog.findOne({ subdomain });

  if (subdomainExists) {
    res.status(409).json({ message: "Subdomain is not available" });
    return;
  }

  if (subdomain.length < 5) {
    res.status(400).json({
      message: "Subdomain cannot be less 5 characters",
    });
    return;
  }

  const subdomainRegex = /^[a-zA-Z0-9\-]+$/;
  if (!subdomainRegex.test(subdomain)) {
    res.status(400).json({
      message: "Subdomain can only contain alphanumeric characters and dashes",
    });
    return;
  }

  try {
    const newBlog = new Blog({
      subdomain,
      title,
      description,
    });

    await newBlog.save();

    const authorUpdate = {
      name: author_name,
      bio: author_bio,
      blogs: [...author.blogs, newBlog._id],
    };

    await Author.findOneAndUpdate({ email: decoded.email }, authorUpdate);

    res.status(200).json({ message: "Onboarding completed" });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default allowMethods(["PUT"])(handler);
