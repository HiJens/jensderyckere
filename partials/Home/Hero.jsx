// Images
import Jens from "../../public/assets/images/jens.jpeg";

// Next
import Image from "next/image";

// Components
import { LineOne, LineTwo } from "../../components";

export default function Hero() {
    return (
        <section className="hero hero--home lg:flex items-center pb-20 pt-5 sm:py-20">
            <div className="container px-6 sm:px-10 md:px-16 lg:mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="hero-content md:pr-32">
                        <span className="hero-content-tagline text-black relative text-xs uppercase font-semibold tracking-widest flex" data-aos="fade-right">
                            Jens Deryckere
                        </span>

                        <h2 className="hero-content-title text-black font-medium text-md md:text-xl mt-2 mb-6" data-aos="fade-right" data-aos-delay="200">
                            I deliver <span className="title-line title-line--v1">user-oriented <LineOne /></span> and <span className="title-line title-line--v2">optimized <LineTwo /></span> digital products
                        </h2>

                        <p data-aos="fade-right" data-aos-delay="200" className="hero-content-text text-black text-sm font-light">
                            Web development, UX design and service design. Three branches that I am constantly working in. They often call me a jack of all trades. I do not say no to that. In my career, I have had the opportunity to support many projects, which has led to a great deal of experience in many different positions.
                            <br />
                            <br />
                            With my website, I want to convince you of my abilities. Has that already happened? No problem, you can <a className="underline text-blue" href="mailto:jensderyckere@icloud.com">contact me</a> as soon as possible. Still need some time? Then feel free to browse through my website.
                        </p>
                    </div>

                    <div className="hero-images lg:flex hidden">
                        <div className="hero-images-wrapper" data-aos="fade-left">
                            <Image 
                                src={Jens}
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-image mt-10 lg:hidden flex z-0 relative">
                <Image 
                    src={Jens}
                />
            </div>
        </section>
    )
};