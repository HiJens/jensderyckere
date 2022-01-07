// Layouts
import { BaseLayout } from "../../layouts";

// Partials
import { Hero, Details, Text, Video } from "../../partials/Work";

// Images
import HeroImage from "../../public/assets/images/duckaway.jpg";

export default function Abloc() {
    return (
        <BaseLayout title="Accter">
            <Hero 
                title="DuckAway"
                image={HeroImage}
                position="50% 80%"
            />

            <Details 
                size={3}
                columns={[
                    {
                        "title": "Type",
                        "values": [
                            "Appdevelopment",
                            "UX Design",
                        ]
                    },
                    {
                        "title": "Year",
                        "values": [
                            "January 21",
                        ]
                    },
                    {
                        "title": "Coworkers",
                        "values": [
                            "Hans Vertriest",
                        ]
                    },
                ]}
            />

            <Text 
                title="Sending our ducks away"
                columns={[
                    "Our ducks have been sent into the world waiting to be discovered. If you spot one of our little friends, take out your phone and scan the attached QR to learn more about them. By letting us know where you found our ducks we can track their adventures. Now, the only goal left is to send them as far away as possible and carry on their journey!",
                    "This project was made in cooperation with Hans Vertriest. He took on the role of back-end developer, while I worked on developing the front-end in React and designing the application with Figma."
                ]}
            />

            <Video 
                url="https://www.youtube.com/watch?v=f4h53ARJ2b4"
            /> 
        </BaseLayout>
    )
}