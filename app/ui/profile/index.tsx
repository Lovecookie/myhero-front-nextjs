import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IProfileImagePros {
    src: string | StaticImport;
    alt: string;
    width: number;
    height: number;
}

export function ProfileImage({ src, alt, width, height }: IProfileImagePros) {
    return (
        <Image
            src={src}
            alt={alt}
            className="object-cover rounded-full border-0 object-center"
            width={width}
            height={height}
        ></Image>
    );
}
