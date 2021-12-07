// Layouts
import { BaseLayout } from "../../layouts";

// Partials
import { Hero, Details, Text, Quote, Visit, Images } from "../../partials/Work";

// Images
import HeroImage from "../../public/assets/images/abloc.jpeg";
import Mock1Image from "../../public/assets/images/abloc/mock.png";
import Mock2Image from "../../public/assets/images/abloc/mock-1.png";
import Mock3Image from "../../public/assets/images/abloc/mock-2.png";

export default function Abloc() {
    return (
        <BaseLayout title="A'Bloc Coaching">
            <Hero 
                title="A'Bloc Coaching"
                image={HeroImage}
                position="50% 20%"
            />

            <Details 
                size={3}
                columns={[
                    {
                        "title": "Client",
                        "values": [
                            "A'Bloc Coaching",
                        ]
                    },
                    {
                        "title": "Type",
                        "values": [
                            "Webdevelopment",
                            "UX Design",
                            "Branding"
                        ]
                    },
                    {
                        "title": "Year",
                        "values": [
                            "November 21",
                        ]
                    },
                ]}
            />

            <Text 
                title="Fully responsive website"
                columns={[
                    "A'Bloc Coaching stands for the mental and physical preparation of people. All this wrapped up in a young and dynamic approach. For Arnaud Deleu, manager of A'Bloc Coaching, a website was created that works perfectly on both mobile and desktop devices.",
                    "The website was designed and a prototype was delivered using Figma. The development was done in a front-end framework called Next.js. "
                ]}
            />

            <Quote
                title="It was a pleasure to work with u"
                name="Arnaud Deleu"
            />

            <Images 
                images={[
                    Mock1Image,
                    Mock3Image,
                    Mock2Image
                ]}
            />

            <Visit 
                url="www.abloccoaching.cc"
            />
        </BaseLayout>
    )
}