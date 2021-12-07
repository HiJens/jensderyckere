import Image from "next/image";

export default function Banner({ image, width, height }) {
    return (
        <section className="banner my-12 md:py-14 py-10">
            <svg viewBox="0 0 1149 497" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1149 497L0 0V497H1149Z" fill="#3F80FF"/>
            </svg>

            <div data-aos="fade-up">
                <Image 
                    src={image}
                    objectFit="cover"
                    layout="fill"
                />
            </div>
        </section>
    )
};