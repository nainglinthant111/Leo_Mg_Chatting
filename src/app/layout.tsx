import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {GoogleOAuthProvider} from '@react-oauth/google';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Lumina Chat",
    description: "Lumina Chat",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <GoogleOAuthProvider
            clientId="978243404735-e6fmbg5gill7qged2s4t15r68o86nsdh.apps.googleusercontent.com">{children}</GoogleOAuthProvider>
        </body>
        </html>
    );
}
