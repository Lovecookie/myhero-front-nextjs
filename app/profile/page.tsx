"use client";

import { getUserBasic } from "../lib/user-action";
import { IResponseInfoWith, LoginUser } from "@/interfaces/resposne";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const [user, setUser] = useState<LoginUser | undefined>();
    const [error, setError] = useState("");

    useEffect(() => {
        async function getUser() {
            const response: IResponseInfoWith<LoginUser> = await getUserBasic();
            console.log("response", response);

            console.log("called ProfilePage getUser()");

            if (response.code !== 0 || !response.data) {
                setError(response.message);
                console.log("error", response.message);
            } else {
                setUser(response.data);
                console.log("userData", response.data);
            }
        }

        getUser();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Welcome {user.nickname}</h1>
        </div>
    );
}
