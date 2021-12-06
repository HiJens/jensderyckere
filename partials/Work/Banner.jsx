import Image from "next/image";

export default function Banner({ image }) {
    return (
        <section className="banner my-12 py-16">
            <svg viewBox="0 0 1149 497" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1149 497L0 0V497H1149Z" fill="#3F80FF"/>
            </svg>

            <Image 
                src={image}
                objectFit="cover"
            />
        </section>
    )
};