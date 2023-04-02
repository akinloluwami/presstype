import { NextApiRequest, NextApiResponse } from "next";

export const allowMethods =
  (methods: string[]) =>
  (handler: any) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (typeof req.method !== "string") {
      res.setHeader("Allow", methods.join(", "));
      return res.status(405).send({ error: "Method Not Allowed" });
    }

    if (!methods.includes(req.method)) {
      res.setHeader("Allow", methods.join(", "));
      return res
        .status(405)
        .send({ error: `Method ${req.method} Not Allowed` });
    }

    return handler(req, res);
  };
