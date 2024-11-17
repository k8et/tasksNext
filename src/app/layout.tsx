import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import React, {ReactNode} from "react";
import {Providers} from "@/app/providers";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Test Task",
    description: "Test Task",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased  `}>
        <Providers>
            <div className={"h-screen  flex flex-col justify-between "}>
                <Header/>
                    {children}
                <Footer/>
            </div>
        </Providers>
        </body>
        </html>
    );
}
