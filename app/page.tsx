import FallingStars from "@/components/falling-stars";
import LoginForm from "@/components/ui/login-form";

import Image from "next/image";

export default function HomePage() {
    return (
        <div>
            <FallingStars>
                <LoginForm />
            </FallingStars>
        </div>
    );
}
