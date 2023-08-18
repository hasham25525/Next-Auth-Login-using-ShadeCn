'use client'
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { log } from "console"
import { Input } from "../ui/input"
import Link from "next/link"

const LoginForm = () => {

    const FormSchema = z.object({
        email: z.string().min(2,'Email is required').email('Invalid Email'),
        password: z
        .string()
        .min(1,'Password is required')
        .min(8,'Password must have alteast 8 characters')
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })


    const onSubmit = (values:z.infer<typeof FormSchema>) => {
        console.log(values);

    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="mail@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter your password.." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full " type="submit">Submit</Button>
                </form>
                <div className='mx-auto my-4 flex w-full items-center justify-evenly 
                before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 
                after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
                    or
                </div>
                <p className='text-center text-sm ☐text-gray-600 mt-2'>
                    If you don&apos;t have an account, please&nbsp; 
                    <Link href='/register' className="text-blue-600 hover:underline">Register</Link>
                </p>
            </Form>
        </div>
    )
}

export default LoginForm