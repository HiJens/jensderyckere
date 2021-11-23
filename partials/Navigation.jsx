import { useState } from "react"

// Next
import Link from "next/link"

export default function Navigation() {
    const [ showMenu, setShowMenu ] = useState(false);

    return (
        <div className="navigation">
            <div className={`navigation-button relative z-10 cursor-pointer flex flex-col items-end${showMenu ? ' active': ''}`} onClick={() => setShowMenu(!showMenu)}>
                <span className="flex w-10 h-0.5 bg-black"></span>
                <span className="flex w-10 my-2 h-0.5 bg-black"></span>
                <span className="flex w-10 h-0.5 bg-black"></span>
            </div>

            <div className={`navigation-menu fixed ${!showMenu ? '-right-full': 'right-0'} top-0 w-full md:w-6/12 lg:w-3/12 h-screen bg-black py-36 sm:px-8 md:px-14 lg:px-24 z-0`}>
                <div className="navigation-menu-links flex flex-col items-end">
                    <Link href="/" passHref>
                        <a className="text-lg font-semibold text-white mb-8">Home</a>
                    </Link>

                    <Link href="/work" passHref>
                        <a className="text-lg font-semibold text-white mb-8">Work</a>
                    </Link>

                    <Link href="/" passHref>
                        <a className="text-lg font-semibold text-white">Contact</a>
                    </Link>
                </div>

                <div className="navigation-menu-socials">
                    
                </div>
            </div>
        </div>
    )
};
