'use client'
import React, {useCallback, useRef, useState} from 'react';
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button";
import AuthSocialButton from "@/app/components/AuthSocialButton";
import {BsGithub, BsGoogle} from 'react-icons/bs'

type Variants = "LOGIN" | "REGISTER"
const AuthForm = () => {
    const [variant, setVariant] = useState<Variants>("LOGIN")

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    const socialAction = (action: string) => {
        console.log(action)
    }

    const onSubmit = () => {
        if (variant === 'LOGIN') {
            console.log("LOGIN")
        } else {
            console.log("REGISTER")
        }
    }

    return (
        <>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                {variant === "LOGIN" ? "Sign in to your account" : "Register your account"}</h2>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="
            bg-white
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10
            ">
                    {variant === "REGISTER" && (
                        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                            <Label htmlFor="username">Name</Label>
                            <Input type="text" id="username"/>
                        </div>
                    )}
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email"/>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password"/>
                    </div>
                    <div>
                        <Button className="w-full mt-4" onClick={onSubmit}>
                            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="
                        absolute
                        inset-0
                        flex
                        items-center">
                                <div className="
                            w-full
                            border-t
                            border-gray-300
                            "/>
                            </div>
                            <div className="
                        relative
                        flex
                        justify-center
                        text-sm
                        ">
                            <span className="
                            bg-white px-2 text-gray-500
                            ">
                                Or continue with
                            </span>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')}/>
                            <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')}/>
                        </div>

                        <div className="
                    flex
                    gap-2
                    justify-center
                    text-sm
                    mt-6
                    px-2
                    text-gray-500
                    ">
                            <div>
                                {variant === "LOGIN" ? 'New to Lumina?' : 'Already have an account?'}
                            </div>
                            <div className="underline cursor-pointer" onClick={toggleVariant}>
                                {variant === "LOGIN" ? 'Create an account' : 'Login'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthForm;