import { LoginUser, IResponseInfoWith } from "@/interfaces/resposne";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IResponseInfoWith<LoginUser>>) {}
