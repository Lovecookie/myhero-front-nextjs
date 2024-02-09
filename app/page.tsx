"use client";

import FallingStars from "@/components/falling-stars";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    router.push("/login");

    return (
        <div>
            <FallingStars>
                <div className="flex items-center justify-center h-screen">
                    <h1
                        style={{
                            fontFamily: "Dancing Script",
                            fontSize: "48px",
                            color: "blue",
                        }}
                    >
                        What should I wear today?
                    </h1>
                </div>
            </FallingStars>
        </div>
    );
}
