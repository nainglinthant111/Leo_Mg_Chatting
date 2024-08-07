import React from 'react';
import Image from "next/image";

import Logo from '../../public/logo.png'
import Authentication from "@/app/components/Authentication";
import {getSession} from "next-auth/react";

const Page = async () => {
    return (
        <div className="
        flex
        min-h-screen
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100
        ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image src={Logo} alt="Logo" height={48} width={48} className="mx-auto w-auto"/>
            </div>
             <Authentication />
        </div>
    );
};

export default Page;