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

const RegistForm = () => {

    const FormSchema = z.object({
        username:z.string().min(2,'Username is required').max(40),
        email: z.string().min(2,'Email is required').email('Invalid Email'),
        password: z
        .string()
        .min(1,'Password is required')
        .min(8,'Password must have alteast 8 characters'),
        confirmPassword: z.string().min(1,'Password confirmation is required'),
    })
    .refine((data)=>data.password==data.confirmPassword,{
        path:['confirmPassword'],
        message:'Password does not match with the new one',
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues:{
            username:'',
            email:'',
            password:'',
            confirmPassword:'',
        }
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
                        name="username"
                        render={({ field }) => (    
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="user123" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="mail@example.com" {...field} />
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
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter your password.." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Re-Enter Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full " type="submit">Register</Button>
                </form>
                <div className='mx-auto my-4 flex w-full items-center justify-evenly 
                before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 
                after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
                    or
                </div>
                <p className='text-center text-sm ☐text-gray-600 mt-2'>
                   If you already have an account, please&nbsp; 
                    <Link href='/login' className="text-blue-600 hover:underline">Login</Link>
                </p>
            </Form>
        </div>
    )
}

export default RegistForm