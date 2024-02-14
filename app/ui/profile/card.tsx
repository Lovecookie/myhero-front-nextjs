import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ProfileDetail, ProfileDetailWithCrew, UserProfile } from "@/interfaces/response";
import ProfilePic256 from "@/public/assets/placeholder256.png";
import { MapPinIcon } from "@heroicons/react/16/solid";

interface IProfileCardProps {
    profileDetailWithCrew: ProfileDetailWithCrew;
}

interface IProfileImagePros {
    src: string | StaticImport;
    alt: string;
}

function _getImage(imageUrl: string): string | StaticImport {
    if (imageUrl || imageUrl === "") {
        return imageUrl;
    } else {
        return ProfilePic256;
    }
}

export default function ProfileCard({ profileDetailWithCrew }: IProfileCardProps) {
    const profileDetail: ProfileDetail = profileDetailWithCrew;
    const crew: UserProfile[] = profileDetailWithCrew.crew;

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid max-w-3xl grid-cols-1 md:grid-cols-profile gap-6 px-4 py-6 md:py-12 lg:gap-10 md:px-6 border border-gray-300 shadow-lg bg-white">
                <ProfileCardHead profileDetail={profileDetail} />
                {crew !== undefined && <ProfileCardCrewList crew={profileDetailWithCrew.crew} />}
            </div>
        </div>
    );
}

export function ProfileImage128({ src, alt }: IProfileImagePros) {
    return (
        <div className="rounded-full overflow-hidden border w-32 h-32 relative">
            <Image src={src} alt={alt} layout="fill" objectFit="cover" quality={75}></Image>;
        </div>
    );
}

export function ProfileImage64({ src, alt }: IProfileImagePros) {
    return (
        <div className="rounded-full overflow-hidden border w-16 h-16 relative">
            <Image src={src} alt={alt} layout="fill" objectFit="cover" quality={75}></Image>;
        </div>
    );
}

export function ProfileImage48({ src, alt }: IProfileImagePros) {
    return (
        <div className="rounded-full overflow-hidden border w-12 h-12 relative">
            <Image src={src} alt={alt} layout="fill" objectFit="cover" quality={75}></Image>;
        </div>
    );
}

export function ProfileImage32({ src, alt }: IProfileImagePros) {
    return (
        <div className="rounded-full overflow-hidden border w-8 h-8 relative">
            <Image src={src} alt={alt} layout="fill" objectFit="cover" loading="lazy" quality={75}></Image>;
        </div>
    );
}

export function ProfileCardHead({ profileDetail }: { profileDetail: ProfileDetail }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
                <ProfileImage128 src={_getImage(profileDetail.userProfile.profileImage)} alt="Profile image" />
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold">{profileDetail.userProfile.nickname}</h1>
                    <div className="flex flex-row gap-2">
                        <MapPinIcon className="h-6 w-6 text-blue-500" />
                        <p className="text-gray-500 dark:text-gray-400">{profileDetail.userProfile.place}</p>
                    </div>
                </div>
            </div>
            <p className="text-base leading-loose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                {profileDetail.introduction}
            </p>
        </div>
    );
}

export function ProfileMiniCard({ key: index, userProfile }: { key: number; userProfile: UserProfile }) {
    return (
        <div className="flex items-center gap-4" key={index}>
            <ProfileImage48 src={_getImage(userProfile.profileImage)} alt="Profile image" />
            <div>
                <div className="flex flex-col">
                    <h3 className="font-semibold">{userProfile.nickname}</h3>
                    <div className="flex flex-row gap-2">
                        <MapPinIcon className="h-6 w-6 text-blue-500" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">{userProfile.place}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProfileCardCrewList({ crew }: { crew: UserProfile[] }) {
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
            {crew.map((profile, index) => {
                return <ProfileMiniCard key={index} userProfile={profile} />;
            })}
        </div>
    );
}
