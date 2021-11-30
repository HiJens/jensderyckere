import { useState } from "react";

export default function Reviews() {
    const [ activeIndex, setActiveIndex ] = useState(0);

    // All content
    const reviewsContent = [
        {
            quote: "Dit is een test van een zeer goede quote",
            name: "Isabelle De Nil",
            role: "Founder",
            avatar: "",
            firm: {
                title: "Hi! Innovation",
                url: "www.hinnovation.be"
            }
        },
        {
            quote: "Dit is een test van een zeer goede quote",
            name: "Arnaud Deleu",
            role: "Founder",
            avatar: "",
            firm: {
                title: "A'Bloc Coaching",
                url: "www.abloccoaching.cc"
            }
        },
        {
            quote: "Dit is een test van een zeer goede quote",
            name: "Hans Vertriest",
            role: "Fullstack Developer",
            avatar: "",
            firm: {
                title: "Bizzy",
                url: "www.bizzy.eu"
            }
        },
    ];

    const changeIndex = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="reviews bg-lightgrey my-20" id="reviews">
            <div className="container px-6 sm:px-10 md:px-16 py-14 lg:mx-auto relative">
                {
                    activeIndex !== 0 && (
                        <span onClick={() => changeIndex(activeIndex - 1)} className="reviews-button reviews-button--left absolute left-0 top-0 bottom-0 m-auto hidden lg:flex w-12 h-12 rounded-full justify-center items-center cursor-pointer bg-white" data-aos="fade-right">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 12L11.5 6M18 12L5.5 12L18 12ZM5.5 12L11.5 18L5.5 12Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    )
                }

                {
                    reviewsContent && reviewsContent.map((item, index) => {
                        return activeIndex === index && (
                            <div key={index} className="reviews-item mb-10 flex flex-col items-center" data-aos="fade-u">
                                <h2 className="reviews-item-quote text-center text-black text-lg font-medium">
                                    {item.quote}
                                </h2>

                                <div className="reviews-item-avatar w-20 h-20 rounded-full flex bg-grey mt-6 mb-4">

                                </div>

                                <span className="reviews-item-name text-center text-md text-black font-normal">
                                    {item.name}
                                </span>

                                <span className="reviews-item-info text-center text-grey font-light text-sm">
                                    {item.role}, <a className="underline" href={item.firm.url} target="_blank">{item.firm.title}</a>
                                </span>
                            </div>
                        )
                    })
                }

                {
                    activeIndex === reviewsContent.length - 1 === false && (
                        <span onClick={() => changeIndex(activeIndex + 1)} className="reviews-button reviews-button--right cursor-pointer absolute right-0 top-0 bottom-0 m-auto hidden lg:flex w-12 h-12 rounded-full items-center justify-center bg-white" data-aos="fade-left">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 12L11.5 6M18 12L5.5 12L18 12ZM5.5 12L11.5 18L5.5 12Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    )
                }

                <div className="reviews-paginate absolute flex items-center justify-center left-0 right-0 bottom-14 m-auto">
                    {
                        reviewsContent.map((item, index) => {
                            return activeIndex === index ? (
                                <span key={index} onClick={() => changeIndex(index)} className="bg-blue w-3 h-3 mx-1 rounded-full flex cursor-pointer"></span>
                            ) : (
                                <span key={index} onClick={() => changeIndex(index)} className="bg-blue w-3 h-3 mx-1 rounded-full opacity-60 flex cursor-pointer"></span>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};