// Layouts
import { BaseLayout } from "../../layouts";

// Partials
import { Hero, Details } from "../../partials/Work";

// Images
import HeroImage from "../../public/assets/images/abloc.jpeg";

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
        </BaseLayout>
    )
}