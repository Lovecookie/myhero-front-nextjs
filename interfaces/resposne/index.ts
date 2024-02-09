export interface IResponseInfoWith<Data = any> {
    code: number;
    message: string;
    data?: Data;
}

export type LoginUser = {
    email: string;
    nickname: string;
};

export function ResponseError(code: number, message: string): IResponseInfoWith {
    return { code, message };
}

export function ResponseSuccess(data: any): IResponseInfoWith {
    return { code: 0, message: "", data };
}
