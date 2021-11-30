// Components
import { LineThree } from "../../components";

// Next
import Image from "next/image";
import Link from "next/link";

// Images
import RouteZ from "../../public/assets/images/routez.png";
import Abloc from "../../public/assets/images/abloc.jpeg";
import Accter from "../../public/assets/images/accter.png";
import Duckaway from "../../public/assets/images/duckaway.png";

export default function Work() {
    const workContent = [
        {
            image: RouteZ,
            title: "RouteZ",
            tags: ["softwaredevelopment", "servicedesign"],
            description: "RouteZ is a digital learning platform created by teachers and for teachers. With the help of the community, teachers can polish themselves and raise themselves to a higher level.",
            slug: "route-z"
        },
        {
            image: Accter,
            title: "Accter",
            tags: ["webdevelopment", "uxdesign"],
            description: "ACCTER automates and simplifies all your corporate planning and consolidation processes. Their goal is to transform the traditional consolidation, forecasting and budgeting cycles into value adding business processes and streamline your financial close.",
            slug: "accter"
        },
        {
            image: Duckaway,
            title: "DuckAway",
            tags: ["softwaredevelopment"],
            description: "DuckAway is a social experiment in which ducks are distributed all over the world. Once a duck is found, it can be passed on and give the duck a nice trip.",
            slug: "duckaway"
        },
        {
            image: Abloc,
            title: "A'Bloc Coaching",
            tags: ["webdevelopment", "uxdesign", "branding"],
            description: "A healthy mind in a healthy body is probably a saying you've heard a lot, but it's often not given any importance. At A'Bloc, this is one of the core values that sets them apart from the rest.",
            slug: "abloc"
        },
    ];

    return (
        <section className="work my-20" id="work">
            <div className="container px-6 sm:px-10 md:px-16 lg:mx-auto">
                <h3 className="title font-medium text-black text-lg" data-aos="fade-right">
                    Some <span className="title-line title-line--v3">work <LineThree /></span>
                </h3>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 mt-20">
                        {
                            workContent && workContent.map((item, index) => {
                                return (
                                    <div key={index} className="work-item mb-10" data-aos={index % 2 ? "fade-left" : "fade-right"}>
                                        <div className="work-item-img relative w-full">
                                            <Image 
                                                src={item.image}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                            />
                                        </div>

                                        <div className="work-item-content mt-7">
                                            <h4 className="title text-md text-black font-bold">
                                                {item.title}
                                            </h4>

                                            <div className="tags flex flex-wrap">
                                                {
                                                    item.tags.map((tag, innerIndex) => {
                                                        return (
                                                            <span key={innerIndex} className="tags-item mr-2 my-1 opacity-50 font-semibold uppercase text-xs">
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