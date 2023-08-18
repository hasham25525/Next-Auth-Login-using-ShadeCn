import { FC, ReactNode } from "react"
import { Button } from "./ui/button"

interface GoogleSignInButtonProps {
    children: ReactNode;
}

const GoogleSignIn: FC<GoogleSignInButtonProps> = ({ children }) => {
    const LoginWithGoogle = () => {
        console.log('login with google');
    }
    return <Button variant={"outline"} onClick={LoginWithGoogle} className="w-full mt-2">
        <img  src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" className="pr-3 w-10" />
        {children}
    </Button>

}

export default GoogleSignIn