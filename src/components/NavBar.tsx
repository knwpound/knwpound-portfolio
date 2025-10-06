"use client"
import { useAOS } from "@/้hooks/useAos"
import Link from "next/link"
export function NavBar(){
    useAOS(1000);
    return(
        <div data-aos="fade-up" className="flex flex-row gap-[32px] w-fit px-5 py-1 rounded-full shadow-md bg-white
        fixed top-2 left-1/2 -translate-x-1/2 z-50">
            <Link className="hover:underline active:font-semibold" href={""}>Home</Link>
            <Link className="hover:underline active:font-semibold" href={""}>About</Link>
            <Link className="hover:underline active:font-semibold" href={""}>Work</Link>
            <Link className="hover:underline active:font-semibold" href={""}>Contact</Link>
        </div>
    )
}