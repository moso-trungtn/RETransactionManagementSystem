"use client"
import {Footer, Navbar} from "@/components/common";
import {FC} from "react";
import {useRouter} from "next/navigation";

type WrapperProps = {
    children: React.ReactNode;
}
export const Wrapper:FC<WrapperProps> = ({children}) => {
    const router = useRouter()
    function onLoginHandleClick() {
        alert("U r click on login button")
    }

    function onLogoHandleClick() {
        router.push("/")
    }

    return <>
        <Navbar onViewTransactions={() => null} onLoginClick={() => onLoginHandleClick()} onLogoClick={() => onLogoHandleClick()} />
        {children}
        <Footer />
    </>
}