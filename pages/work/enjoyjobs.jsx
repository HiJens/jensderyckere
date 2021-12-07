// Layouts
import { BaseLayout } from "../../layouts";

// Partials
import { Hero, Details, Text, Visit, TextImage } from "../../partials/Work";

// Images
import HeroImg from "../../public/assets/images/enjoyjobs/hero.jpg";
import MockImg from "../../public/assets/images/enjoyjobs/mock.png";

export default function EnjoyJobs() {
    return (
        <BaseLayout title="Enjoy Jobs">
            <Hero 
                image={HeroImg}
                position="50% 50%"
                title="Enjoy Jobs"
            />

            <Details 
                columns={[
                    {
                        "title": "Client",
                        "values": [
                            "Enjoy Jobs",
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
                            "April 21",
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
                title="A fresh digital look"
                columns={[
                    "Enjoy Jobs falls under the heading of a selection office. As a selection office, they search for suitable candidates who want to be permanently employed by their client. For Enjoy Jobs, you are anything but a number. They guarantee an integer approach and honest communication. In case a potential candidate does not make it through the selection, they provide constructive feedback. When a jobseeker finds a job via Enjoy Jobs, they schedule a follow-up interview. Even when they do not have immediate opportunities for a certain profile, they communicate this and do not leave the person in the dark.",
                    "For Enjoy Jobs we made a complete responsive website with backoffice. Beforehand it became clear that there was a need to give the current website a new and fresh look. Together with Hans Vertriest we went to work to achieve a successful end result."
                ]}
            />

            <TextImage
                image={MockImg}
                title="Our steps in creation"
                text="For the development of this website, we first had to look at a design. Using Figma, we delivered a design and prototype to Enjoy Jobs within the first steps. After the feedback period we could start developing the website. An API was already available for the website so we only had to make the front-end. We did this in the React framework. After every month of development, a final version was put online."
                buttons={[
                    {
                        url: "/#contact",
                        style: "primary",
                        text: "Get in touch"
                    },
                    {
                        url: "/#work",
                        style: "secundary",
                        text: "Watch more"
                    },
                ]}
            />

            <Visit 
                url="www.enjoy.jobs"
            />
        </BaseLayout>
    )   
}