// Layouts
import { BaseLayout } from "../../layouts";

// Partials
import { Hero, Details, Text, Quote, Banner } from "../../partials/Work";

// Images
import HeroImage from "../../public/assets/images/abloc.jpeg";
import MockImage from "../../public/assets/images/abloc-mock.png";

export default function Abloc() {
    return (
        <BaseLayout title="A'Bloc Coaching">
            <Hero 
                title="A'Bloc Coaching"
                image={HeroImage}
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

            <Banner 
                image={MockImage}
            />
        </BaseLayout>
    )
}