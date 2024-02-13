"use client";

import { getUserBasic } from "../lib/user-action";
import { IResponseInfoWith, LoginUser, UserProfile, ProfileDetail } from "@/interfaces/response";
import { useEffect, useState } from "react";
import PlaceholderPic from "@/public/assets/placeholder.png";
import PlaceholderPic256 from "@/public/assets/placeholder256.png";
import Image from "next/image";
import styles from "./profile.module.css";
import { ProfileImage } from "../ui/profile";
import { PostAsync } from "@/interfaces/util/client-fetch";
import { MapPinIcon } from "@heroicons/react/20/solid";

export default function ProfilePage() {
    const [profileDetail, setProfileDetail] = useState<ProfileDetail | undefined>();
    const [error, setError] = useState("");

    useEffect(() => {
        async function getUserDetail() {
            const responseInfo: IResponseInfoWith<LoginUser> = await getUserBasic();
            console.log("response", responseInfo);

            console.log("called ProfilePage getUser()");

            if (responseInfo.code !== 0 || !responseInfo.data) {
                setError(responseInfo.message);
                // console.log("error", response.message);
            } else {
                // console.log("userData", response.data);
                const response = await PostAsync({
                    url: "/api/profile/detail",
                    body: JSON.stringify(responseInfo.data),
                });

                const responseData = await response.json();

                console.log("responseData profileData", responseData.data);

                setProfileDetail(responseData.data);
            }
        }

        getUserDetail();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!profileDetail) {
        return <div>Loading...</div>;
    }

    return <ProfileForm profileDetail={profileDetail} />;
}

interface IProfileFormProps {
    profileDetail: ProfileDetail;
}

// interface IProfileCardHeadProps {
//     profileDetail: ProfileDetail;
// }

// export function ProfileCardHead({ profileDetail }: IProfileCardHeadProps) {
//     return (
//         <div className="flex flex-col gap-2">
//             <div className="flex items-center gap-4">
//                 <div className="rounded-full overflow-hidden border w-32 h-32">
//                     <div className="flex items-center gap-4">
//                         <ProfileImage
//                             src={profileDetail.userProfile.profileImage || PlaceholderPic256}
//                             alt="Profile image"
//                             width={256}
//                             height={256}
//                         />
//                     </div>
//                 </div>
//                 <div className="flex flex-col">
//                     <h1 className="text-3xl font-bold">{profileDetail.userProfile.nickname}</h1>
//                     <div className="flex flex-row gap-2">
//                         <MapPinIcon className="h-6 w-6 text-blue-500" />
//                         <p className="text-gray-500 dark:text-gray-400">Senior Software Engineer</p>
//                     </div>
//                 </div>
//             </div>
//             <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
//                 {profileDetail.introduction}
//             </p>
//         </div>
//     );
// }

// export function ProfileSubCard() {
//     return (
//         <div className="flex items-center gap-4">
//             <div className="rounded-full overflow-hidden border w-12 h-12">
//                 <Image
//                     src={PlaceholderPic}
//                     alt="Profile image"
//                     className="object-cover rounded-full border-0 object-center"
//                     height={48}
//                     width={48}
//                 ></Image>
//             </div>
//             <div className="flex flex-col">
//                 <h3 className="font-semibold">Bob Smith</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
//             </div>
//         </div>
//     );
// }

// export function ProfileCardCrewList() {
//     return (
//         <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
//             <div className="flex items-center gap-4">
//                 <div className="rounded-full overflow-hidden border w-12 h-12">
//                     <Image
//                         src={PlaceholderPic}
//                         alt="Profile image"
//                         className="object-cover rounded-full border-0 object-center"
//                         height={48}
//                         width={48}
//                     ></Image>
//                 </div>
//                 <div className="flex flex-col">
//                     <h3 className="font-semibold">Bob Smith</h3>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
//                 </div>
//             </div>
//             <div className="flex items-center gap-4">
//                 <div className="rounded-full overflow-hidden border w-12 h-12">
//                     <Image
//                         src={PlaceholderPic}
//                         alt="Profile image"
//                         className="object-cover rounded-full border-0 object-center"
//                         height={48}
//                         width={48}
//                     ></Image>
//                 </div>
//                 <div className="flex flex-col">
//                     <h3 className="font-semibold">Ella Davis</h3>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">Product Designer</p>
//                 </div>
//             </div>
//             <div className="flex items-center gap-4">
//                 <div className="rounded-full overflow-hidden border w-12 h-12">
//                     <Image
//                         src={PlaceholderPic}
//                         alt="Profile image"
//                         className="object-cover rounded-full border-0 object-center"
//                         height={48}
//                         width={48}
//                     ></Image>
//                 </div>
//                 <div className="flex flex-col">
//                     <h3 className="font-semibold">Charlie Brown</h3>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

function ProfileForm({ profileDetail }: IProfileFormProps) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid max-w-3xl grid-cols-1 md:grid-cols-profile gap-6 px-4 py-6 md:py-12 lg:gap-10 md:px-6 border border-gray-300 shadow-lg bg-white">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden border w-32 h-32">
                            <div className="flex items-center gap-4">
                                <ProfileImage src={PlaceholderPic256} alt="Profile image" width={256} height={256} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-bold">Haily Lee</h1>
                            <div className="flex flex-row gap-2">
                                <MapPinIcon className="h-6 w-6 text-blue-500" />
                                <p className="text-gray-500 dark:text-gray-400">Senior Software Engineer</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                        Passionate about web development. Love to travel and explore new places.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden border w-12 h-12">
                            <Image
                                src={PlaceholderPic}
                                alt="Profile image"
                                className="object-cover rounded-full border-0 object-center"
                                height={48}
                                width={48}
                            ></Image>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-semibold">Bob Smith</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden border w-12 h-12">
                            <Image
                                src={PlaceholderPic}
                                alt="Profile image"
                                className="object-cover rounded-full border-0 object-center"
                                height={48}
                                width={48}
                            ></Image>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-semibold">Ella Davis</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Product Designer</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden border w-12 h-12">
                            <Image
                                src={PlaceholderPic}
                                alt="Profile image"
                                className="object-cover rounded-full border-0 object-center"
                                height={48}
                                width={48}
                            ></Image>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-semibold">Charlie Brown</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
