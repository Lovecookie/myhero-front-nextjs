import { NextApiRequest } from "next";
import { IResponseInfo, IResponseInfoWith } from "./resposne";

export function isValidPost(req: NextApiRequest) {
    return req.method === "POST";
}

export function errorStatus(code: number, message: string) {
    return {
        code,
        message,
    } as IResponseInfo;
}

export function successStatus(data: any) {
    return {
        code: 0,
        message: "",
        data,
    } as IResponseInfoWith<any>;
}
