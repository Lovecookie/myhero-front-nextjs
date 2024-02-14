import FallingStars from "@/components/falling-stars";
import LoginForm from "@/components/form/login-form";
import { IResponseWith, LoginUser } from "@/interfaces/response";
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
