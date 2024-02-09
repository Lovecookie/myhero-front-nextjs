import FallingStars from "@/components/falling-stars";
import LoginForm from "@/components/form/login-form";
import { IResponseInfoWith, LoginUser } from "@/interfaces/resposne";
import { TOptional } from "@/interfaces/util/optional";
import { useRouter } from "next/router";

export default function LoginPage() {
    return (
        <div>
            <FallingStars>
                <LoginForm callbackUrl="/profile" />
            </FallingStars>
        </div>
    );
}
