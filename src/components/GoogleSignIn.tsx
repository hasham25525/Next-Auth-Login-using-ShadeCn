import { FC, ReactNode } from "react"
import { Button } from "./ui/button"

interface GoogleSignInButtonProps {
    children: ReactNode;
}

const GoogleSignIn: FC<GoogleSignInButtonProps> = ({ children }) => {
    const LoginWithGoogle = () => {
        console.log('login with google');
    }
    return <Button onClick={LoginWithGoogle} className="w-full ">{children}</Button>

}

export default GoogleSignIn