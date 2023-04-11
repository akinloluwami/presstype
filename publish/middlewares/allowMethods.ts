import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export function allowMethods(methods: string[]) {
  return (handler: NextApiHandler) =>
    (req: NextApiRequest, res: NextApiResponse) => {
      if (!methods.includes(req.method as string)) {
        res.status(405).json({
          error: "Method Not Allowed",
          message: `This endpoint only supports ${methods.join(
            ", "
          )}, while your request was: ${req.method}`,
        });
        return;
      }
      return handler(req, res);
    };
}
