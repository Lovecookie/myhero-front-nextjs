"use client";

import { getUserBasic } from "../lib/user-action";
import { IResponseWith, LoginUser, ProfileDetail, ProfileDetailWithCrew } from "@/interfaces/response";
import { useEffect, useState } from "react";
import ProfileCard from "../ui/profile/card";
import { requestProfileDetail } from "@/pages/api/profile/detail";

export default function ProfilePage() {
    const [profileWithCrew, setProfileDetail] = useState<ProfileDetailWithCrew | undefined>();
    const [error, setError] = useState("");

    useEffect(() => {
        async function getUserDetail() {
            const responseInfo: IResponseWith<LoginUser> = await getUserBasic();
            console.log("response", responseInfo);

            console.log("called ProfilePage getUser()");

            if (responseInfo.code !== 0 || !responseInfo.data) {
                setError(responseInfo.message);
            } else {
                const res = await requestProfileDetail(JSON.stringify(responseInfo.data));
                console.log("resData: ", res);

                setProfileDetail(res.data);
            }
        }

        getUserDetail();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!profileWithCrew) {
        return <div>Loading...</div>;
    }

    return <ProfileCard profileDetailWithCrew={profileWithCrew} />;
}
