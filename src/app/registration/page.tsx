'use client'
import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import AuthSocialButton from "@/app/components/AuthSocialButton";
import {BsGithub} from "react-icons/bs";
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/logo.png";

const userScheme = z.object({
    username: z.string().min(1, "Please enter a username"),
    email: z.string().email(),
    password: z.string().min(8)
})

type FormFields = z.infer<typeof userScheme>

const Page = () => {
    const {register, handleSubmit, setError, formState: {errors, isSubmitting}} = useForm<FormFields>({
        resolver: zodResolver(userScheme)
    });

    const router = useRouter()

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            console.log(data);
            sessionStorage.setItem('userData', JSON.stringify(data));
        } catch (error) {
            setError("root", {
                message: "This email is already taken",
            })
        }

    }

    const handleGoogleLogin = () => {
        console.log("google login")
    };

    const navigateToLogin = () => {
        router.push('/')
    }

    return (
        <>
            <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Image src={Logo} alt="Logo" height={48} width={48} className="mx-auto w-auto"/>
                </div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Register your account
                </h2>
                <div
                    className="mt-8 mx-3 sm:mx-auto sm:w-full sm:max-w-md bg-white px-4 py-8 shadow rounded-lg sm:px-10">
                    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                            <Label htmlFor="username">Name</Label>
                            <Input {...register('username')} type="text" id="username"/>
                            {errors.username && (
                                <div className="text-red-500">
                                    {errors.username.message}
                                </div>
                            )}
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                            <Label htmlFor="email">Email</Label>
                            <Input {...register('email')} type="text" id="email"/>
                            {errors.email && (<div className="text-red-500">
                                Please enter a valid email address.
                            </div>)}
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input {...register('password')} type="password" id="password"/>
                            {errors.password && (<div className="text-red-500">
                                Password must be at least 8 characters long.
                            </div>)}
                        </div>
                        <Button disabled={isSubmitting} className="w-full mt-4">
                            {isSubmitting ? "Loading ..." : "Register"}
                        </Button>
                        {errors.root && (<div className="text-red-500">
                            {errors.root.message}
                        </div>)}
                    </form>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"/>
                            </div>
                            <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">
                                Or continue with
                            </span>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <AuthSocialButton icon={BsGithub} onClick={handleGoogleLogin}/>
                        </div>
                        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                            <div>
                                Already have an account?
                            </div>
                            <div className="underline cursor-pointer" onClick={navigateToLogin}>
                                Login
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;