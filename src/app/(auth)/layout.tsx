import { FC, ReactNode } from "react"


interface AuthLayoutProps{
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="shadow-xl p-10 rounded-md border bg-gray-50 ">
            {children}
        </div>
    )
}

export default AuthLayout