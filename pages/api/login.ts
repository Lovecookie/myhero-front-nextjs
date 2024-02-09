import { errorStatus, isValidPost, successStatus } from "@/interfaces";
import { LoginRequest } from "@/interfaces/request";
import { IResponseInfoWith, LoginUser } from "@/interfaces/resposne";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<IResponseInfoWith<LoginUser>>) {
    console.log(req.body);

    if (!isValidPost(req)) {
        res.status(405).json(errorStatus(405, "Method not allowed"));

        return;
    }

    const nickname = "smbaek";
    const { email, password }: LoginRequest = req.body;

    res.status(200).json(successStatus({ email, nickname } as LoginUser));
}
