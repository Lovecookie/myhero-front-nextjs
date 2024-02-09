"use server";

import { IResponseInfoWith, LoginUser, ResponseError, ResponseSuccess } from "@/interfaces/resposne";
import { TOptional } from "@/interfaces/util/optional";

const HOST_URL = process.env.HOST_URL;

export async function requestLogin(email: string, password: string) {
    const url = `${HOST_URL}/api/login`;

    console.log(`email:${email}, password:${password}`);
    console.log(url);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        return ResponseError(response.status, "Login failed.");
    }

    const data = await response.json();

    return ResponseSuccess(data);
}
