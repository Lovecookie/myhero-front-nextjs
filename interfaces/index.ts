import { NextApiRequest } from "next";
import { IResponseInfoWith } from "./resposne";

export function isValidPost(req: NextApiRequest) {
    return req.method === "POST";
}

export function errorStatus(code: number, message: string) {
    return {
        code,
        message,
    } as IResponseInfoWith<any>;
}

export function successStatus(data: any) {
    return {
        code: 0,
        message: "",
        data,
    } as IResponseInfoWith<any>;
}
