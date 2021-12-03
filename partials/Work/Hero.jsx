import Image from "next/image";

export default function Hero({ title, image }) {
    return (
        <div className="hero hero--work flex justify-center items-center">
            <div className="hero-title w-full h-full flex justify-center items-center">
                <h1 className="title hero-title text-white font-semibold text-xl relative z-10 text-center">
                    {title} <span className="title-line"></span>
                </h1>
            </div>
            
            <div className="hero-img">
                <Image 
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 20%"
                />
            </div>
        </div>   
    )
};