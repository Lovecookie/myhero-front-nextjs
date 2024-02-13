import FallingStars from "@/components/falling-stars";
import LoginForm from "@/components/form/login-form";

export default function HomePage() {
    return (
        <div>
            <FallingStars>
                <LoginForm callbackUrl="/profile" />
            </FallingStars>
        </div>
    );
}
