import type { Metadata } from 'next';
import {Geist, Geist_Mono, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';
import "flag-icons/css/flag-icons.min.css";
import { Wrapper } from "@/providers/wrapper-provider";

const plusJakartaSans = Plus_Jakarta_Sans({ variable: '--font-plus-jakarta', subsets: ['latin'] });
// const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Real Estate App',
    description: 'A modern real estate application',
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html suppressHydrationWarning>
        <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
