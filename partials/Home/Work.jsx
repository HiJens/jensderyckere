// Components
import { LineThree } from "../../components";

// Next
import Image from "next/image";
import Link from "next/link";

// Images
import RouteZ from "../../public/assets/images/routez/thumbnail.png";
import Abloc from "../../public/assets/images/abloc/thumbnail.png";
import EnjoyJobs from "../../public/assets/images/enjoyjobs/thumbnail.png";
import Accter from "../../public/assets/images/accter/thumbnail.png";
import Duckaway from "../../public/assets/images/duckaway/thumbnail.png";

export default function Work() {
    const workContent = [
        {
            image: RouteZ,
            title: "RouteZ",
            tags: ["softwaredevelopment", "servicedesign"],
            description: "RouteZ is a digital learning platform created by teachers and for teachers. With the help of the community, teachers can polish themselves and raise themselves to a higher level.",
            slug: "routez",
            size: "lg:col-span-6"
        },
        {
            image: EnjoyJobs,
            title: "Enjoy Jobs",
            tags: ["webdevelopment", "uxdesign"],
            description: "Enjoy Jobs helps you to find a job within East- or West-Flanders. Apply online for the available vacancies and upload your personal CV.",
            slug: "enjoyjobs",
            size: "lg:col-span-3"
        },
        {
            image: Abloc,
            title: "A'Bloc Coaching",
            tags: ["webdevelopment", "uxdesign", "branding"],
            description: "A healthy mind in a healthy body is probably a saying you've heard a lot, but it's often not given any importance. At A'Bloc, this is one of the core values that sets them apart from the rest.",
            slug: "abloc",
            size: "lg:col-span-3"
        },
        {
            image: Accter,
            title: "Accter",
            tags: ["webdevelopment", "uxdesign"],
            description: "ACCTER automates and simplifies all your corporate planning and consolidation processes. Their goal is to transform the traditional consolidation, forecasting and budgeting cycles into value adding business processes and streamline your financial close.",
            slug: "accter",
            size: "lg:col-span-6"
        },
        {
            image: Duckaway,
            title: "DuckAway",
            tags: ["appdevelopment", "uxdesign"],
            description: "Our ducks have been sent into the world waiting to be discovered. If you spot one of our little friends, take out your phone and scan the attached QR to learn more about them. By letting us know where you found our ducks we can track their adventures.",
            slug: "duckaway",
            size: "lg:col-span-6"
        },
    ];

    return (
        <section className="work md:mb-36 md:mt-36 mb-20" id="work">
            <div className="container px-6 sm:px-10 md:px-16 lg:mx-auto">
                <h3 className="title font-medium text-black text-lg" data-aos="fade-right">
                    Some <span className="title-line title-line--v3">work <LineThree /></span>
                </h3>

                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-16 md:gap-10 gap-8 mt-10">
                        {
                            workContent && workContent.map((item, index) => {
                                return (
                                    <div key={index} className={`work-item ${ item.size }`} data-aos="fade-up">
                                        <div className="work-item-img relative w-full">
                                            <Image 
                                                src={item.image}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                            />
                                        </div>

                                        <div className="work-item-content mt-7">
                                            <h4 className="title text-md mb-2 text-black font-semibold">
                                                {item.title}
                                            </h4>

                                            <div className="tags flex flex-wrap">
                                                {
                                                    item.tags.map((tag, innerIndex) => {
                                                        return (
                                                            <span key={innerIndex} className="tags-item mr-2 opacity-50 font-semibold uppercase text-xs">
                                                                #{tag}
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <p className="text text-black font-light text-sm my-3">
                                                {item.description}
                                            </p>

                                            <Link passHref href={`/work/${item.slug}`}>
                                                <a className="text-blue text-xs font-semibold uppercase underline tracking-widest">
                                                    Find out more
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </section>
    )
};