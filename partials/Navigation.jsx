import { useEffect, useState } from "react"

// Next
import Link from "next/link"

// Components
import { Behance, Github, Instagram, Linkedin } from "../components";

export default function Navigation() {
    const [ showMenu, setShowMenu ] = useState(false);
    const [ ifHome, setIfHome ] = useState(false);

    // Check which page
    useEffect(() => {
        const pathname = window.location.pathname;
        setIfHome(pathname === "/");
    });

    const goTo = (id) => {
        if (id === "home") {
            window.scrollTo({top: 0});
        } else {
            const el = document.querySelector(id).getBoundingClientRect().top;
            window.scrollTo({top: el - 200});
        }

        setShowMenu(false);
    };

    return (
        <div className="navigation">
            <div className={`navigation-button relative z-10 cursor-pointer flex flex-col items-end${showMenu ? ' active': ''}`} onClick={() => setShowMenu(!showMenu)}>
                <span className="flex w-8 h-0.5 bg-black"></span>
                <span className="flex w-8 my-1.5 h-0.5 bg-black"></span>
                <span className="flex w-8 h-0.5 bg-black"></span>
            </div>

            <div className={`navigation-menu fixed ${!showMenu ? '-right-full': 'right-0'} top-0 w-full md:w-6/12 lg:w-3/12 h-screen bg-black py-36 sm:px-8 md:px-14 lg:px-24 z-0`}>
                <div className="navigation-menu-links flex flex-col items-center md:items-end">
                    {
                        ifHome ? (
                            <>
                                <span onClick={() => goTo("home")} className="text-lg font-semibold text-white mb-8 cursor-pointer">
                                    Home
                                </span>

                                <span onClick={() => goTo("#work")} className="text-lg font-semibold text-white mb-8 cursor-pointer">
                                    Work
                                </span>

                                <span onClick={() => goTo("#contact")} className="text-lg font-semibold text-white mb-8 cursor-pointer">
                                    Contact
                                </span>
                            </>
                        ) : (
                            <>
                                <Link href="/" passHref>
                                    <a className="text-lg font-semibold text-white mb-8">Home</a>
                                </Link>
            
                                <Link href="/#work" passHref>
                                    <a className="text-lg font-semibold text-white mb-8">Work</a>
                                </Link>
            
                                <Link href="/#contact" passHref>
                                    <a className="text-lg font-semibold text-white">Contact</a>
                                </Link>
                            </>
                        )
                    }
                </div>

                <div className="navigation-menu-socials mt-8 flex justify-center md:justify-end items-center">
                    <a href="https://github.com/HiJens" target="_blank" className="navigation-menu-icon mr-3">
                        <Github />
                    </a>

                    <a href="https://www.behance.net/jensdery?tracking_source=search_projects_published_date" target="_blank" className="navigation-menu-icon mr-3">
                        <Behance />
                    </a>

                    <a href="https://www.instagram.com/jensderyckere/" target="_blank" className="navigation-menu-icon mr-3">
                        <Instagram />
                    </a>

                    <a href="https://www.linkedin.com/in/jens-deryckere/" target="_blank" className="navigation-menu-icon">
                        <Linkedin />
                    </a>
                </div>
            </div>
        </div>
    )
};
