import Button from "./Button";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function LoginLogout() {
    const { user, isLoading, error } = useUser;

    if (isLoading) return <div> Loading... </div>;
    if (error) console.log(`{error.message}`);
    if (user) {
        return (
            <Link href="/api/auth/logout">
                <Button>
                    Logout
                </Button>
            </Link>
        )
    } else {
        return (
            <Link href="/api/auth/login">
               <Button>
                    Login
                </Button>
            </Link>
        )
    }
}