// Components
import { Logo, Github, Linkedin, Instagram, Behance } from "../components";

// Next
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top bg-lightgrey py-16">
                <div className="container px-6 sm:px-10 md:px-16 lg:mx-auto">
                    <div className="grid grid-cols-12 gap-10">
                        <div className="xl:col-span-3 lg:col-span-6 col-span-12">
                            <Logo />

                            <div className="footer-contact mt-6">
                                <span className="text-sm text-black font-medium">
                                    Call me via:
                                </span>
                                <br />
                                <a href="tel:0477273697" className="text-black font-light text-sm">
                                    +32 477 27 36 97
                                </a>
                            </div>

                            <div className="footer-contact mt-2 mb-14">
                                <span className="text-sm text-black font-medium">
                                    Or mail me:
                                </span>
                                <br />
                                <a href="mailto:jensderyckere@icloud.com" className="text-black font-light text-sm">
                                    jensderyckere@icloud.com
                                </a>
                            </div>

                            <div className="footer-socials flex">
                                <a href="https://github.com/HiJens" target="_blank" className="mr-2">
                                    <Github />
                                </a>

                                <a href="https://www.behance.net/jensdery?tracking_source=search_projects_published_date" target="_blank" className="mr-2">
                                    <Behance />
                                </a>

                                <a href="https://www.instagram.com/jensderyckere/" target="_blank" className="mr-2">
                                    <Instagram />
                                </a>

                                <a href="https://www.linkedin.com/in/jens-deryckere/" target="_blank" className="">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>

                        <div className="xl:col-span-9 lg:col-span-6 col-span-12">
                            <div className="footer-nav">
                                <h6 className="font-semibold text-grey uppercase tracking-widest">
                                    My work
                                </h6>

                                <div className="footer-nav-split md:flex mt-4">
                                    <div className="footer-nav-split-item">
                                        <Link href="/work/routez" passHref>
                                            <a className="flex mb-2 text-black font-medium text-sm hover:underline">RouteZ</a>
                                        </Link>
                                        <Link href="/work/accter" passHref>
                                            <a className="flex mb-2 text-black font-medium text-sm hover:underline">Accter</a>
                                        </Link>
                                        <Link href="/work/abloc" passHref>
                                            <a className="flex mb-2 text-black font-medium text-sm hover:underline">A'Bloc Coaching</a>
                                        </Link>
                                    </div>

                                    <div className="footer-nav-split-item md:ml-10">
                                        <Link href="/work/duckaway" passHref>
                                            <a className="text-black font-medium text-sm hover:underline">DuckAway</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container px-6 py-6 sm:px-10 md:px-16 lg:mx-auto">
                    <span className="text-black font-light text-sm">
                        &copy; Jens Deryckere, {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </footer>
    )
}