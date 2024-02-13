import { NextApiRequest } from "next";
import { IResponseInfoWith } from "./response";

export function isValidPost(req: NextApiRequest) {
    return req.method === "POST";
}

export function isValidGet(req: NextApiRequest) {
    return req.method === "GET";
}

export function isValidPut(req: NextApiRequest) {
    return req.method === "PUT";
}

export function isValidDelete(req: NextApiRequest) {
    return req.method === "DELETE";
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
