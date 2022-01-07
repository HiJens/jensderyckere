// Layouts
import { BaseLayout } from "../../layouts";

// Partials
import { Hero, Details, Text, Visit, Images } from "../../partials/Work";

// Images
import HeroImage from "../../public/assets/images/accter.jpeg";
import Mock from "../../public/assets/images/accter/mock.png";
import Mock1 from "../../public/assets/images/accter/mock1.png";
import Mock2 from "../../public/assets/images/accter/mock2.png";

export default function Abloc() {
    return (
        <BaseLayout title="Accter">
            <Hero 
                title="Accter"
                image={HeroImage}
                position="50% 50%"
            />

            <Details 
                size={3}
                columns={[
                    {
                        "title": "Client",
                        "values": [
                            "Accter",
                        ]
                    },
                    {
                        "title": "Type",
                        "values": [
                            "Webdevelopment",
                            "UX Design",
                        ]
                    },
                    {
                        "title": "Year",
                        "values": [
                            "September 21",
                        ]
                    },
                    {
                        "title": "Under",
                        "values": [
                            "Digital Pulse",
                        ]
                    },
                ]}
            />

            <Text 
                title="Riveting website at your service"
                columns={[
                    "Under Digital Pulse I took care of the design and development of the Accter website. After designing and prototyping the ideal website in Figma, it was developed using Craft CMS. This makes the content of the website completely customizable and rewritable by the client.",
                ]}
            />

            <Images 
                images={[
                    Mock,
                    Mock2,
                    Mock1
                ]}
            />

            <Visit 
                url="www.accter.be"
            />
        </BaseLayout>
    )
}