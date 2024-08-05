import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";
import HeaderPublic from "@/components/HeaderPublic/HeaderPublic";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Car marketplace",
    description: "Test project",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: ReactNode;
}>) {
    // const cars = await fetch()
    return (
        <html lang="en">
        <body className={inter.className}>
        <HeaderPublic/>
        {children}
        </body>
        </html>
    );
}
