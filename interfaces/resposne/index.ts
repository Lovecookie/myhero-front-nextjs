export interface IResponseInfoWith<Data = any> {
    code: number;
    message: string;
    data?: Data;
}

export type LoginUser = {
    userkey: number;
    email: string;
    nickname: string;
};

export type UserProfile = {
    userkey: number;
    email: string;
    nickname: string;
};

export function ResponseError(code: number, message: string) {
    return { code, message };
}

export function ResponseSuccess(data: any) {
    return { code: 0, message: "", data };
}
