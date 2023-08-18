import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Home } from "lucide-react"


const Nav = () => {
  return (
    <div className="py-2 border-b border-s-zinc-200 fixed w-full top-0">
        <div className="container flex justify-between items-center">
        <Link href='/'><Home/></Link>
        <Link href='/login' className={buttonVariants()}>Login</Link>

        </div>
    </div>
  )
}

export default Nav