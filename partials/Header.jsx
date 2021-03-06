import { useEffect } from "react";

// Components
import { Logo } from "../components";

// Navigation
import Navigation from "./Navigation";

// Next
import Link from "next/link";

export default function Header() {
    return (
        <header className="header w-screen fixed z-10" data-aos="fade-down">
            <div className="w-screen py-8 bg-white px-4 sm:px-8 md:px-14 lg:px-24 flex justify-between items-center">
                <Link href="/" passHref>
                    <a>
                        <Logo />
                    </a>
                </Link>

                <Navigation />
            </div>
        </header>
    )
};