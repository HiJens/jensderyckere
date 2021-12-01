import Link from "next/link";

export default function ErrorContent() {
    return (
        <div className="request my-32" id="contact">
            <div className="container flex flex-col items-center px-6 sm:px-10 md:px-16 lg:mx-auto">
                <h2 className="text-blue font-bold text-xl text-center">
                    Whoops, wrong page!
                </h2>

                <p className="text-center max-w-md text-black text-sm font-light mt-3">
                    Seems you've gotten to the wrong page. No worries, want to go back home?
                </p>

                <Link href="/" passHref>
                    <a className="bg-blue text-white font-medium text-sm px-10 py-4 rounded-full mt-6">
                        For sure!
                    </a>
                </Link>
            </div>
        </div>
    )
};