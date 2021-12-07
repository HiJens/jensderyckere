import Image from "next/image";

export default function Images({ images }) {
    return (
        <section className="images">
            <div className="container md:py-14 py-10 px-6 sm:px-10 md:px-16 lg:mx-auto">
                <div className={`grid gap-10 grid-cols-3`}>
                    {
                        images.map((img, i) => {
                            return (
                                <div className="image-wrapper col-span-full md:col-span-1 h-96 w-full relative" key={i}>
                                    <Image
                                        src={img} 
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};