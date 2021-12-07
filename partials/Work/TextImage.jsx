// Next.js
import Image from "next/image";
import Link from "next/link";

export default function TextImage({ title, text, image, buttons }) {
    return (
        <section className="text-image">
            <div className="container md:py-20 py-10 px-6 sm:px-10 md:px-16 lg:mx-auto">
                <div className="grid grid-cols-2 gap-10 md:gap-20 items-center">
                    {
                        image && (
                            <div className="text-image-img col-span-full md:col-span-1" data-aos="fade-right">
                                <Image 
                                    src={image}
                                />
                            </div>
                        )
                    }

                    <div className="text-image-content col-span-full md:col-span-1">
                        {
                            title && (
                                <h2 className="text-black font-semibold text-md" data-aos="fade-left">
                                    {title}
                                </h2>
                            )
                        }

                        {
                            text && (
                                <p className="text-black font-light text-sm mt-6" data-aos="fade-left">
                                    {text}
                                </p>
                            )
                        }

                        {
                            buttons && (
                                <div className="buttons mt-8 flex flex-wrap">
                                    {
                                        buttons.map((btn, i) => {
                                            return (
                                                <Link key={i} href={btn.url} passHref>
                                                    <a className={`button button-${btn.style} text-sm mr-2`} data-aos="fade-left">
                                                        <span>{btn.text}</span>
                                                    </a>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};