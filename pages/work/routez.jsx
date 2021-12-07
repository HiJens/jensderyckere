// Layouts
import { BaseLayout } from "../../layouts";

// Components
import { Hero, Details, Text, Video, Visit } from "../../partials/Work";

// Images
import HeroImg from "../../public/assets/images/routez/hero.jpg";

export default function Routez() {
    return (
        <BaseLayout title="RouteZ">
            <Hero 
                image={HeroImg}
                title="RouteZ"
            />

            <Details 
                columns={[
                    {
                        "title": "Client",
                        "values": [
                            "Scholengroep 20",
                            "Adite",
                            "Artevelde Hogeschool",
                        ]
                    },
                    {
                        "title": "Type",
                        "values": [
                            "Software Development",
                            "UX Design",
                            "Service Design"
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
                            "Valentine Callebaut",
                            "Yentel De Hauwere",
                        ]
                    },
                ]}
            />

            <Text 
                title="Self-directed learning in a powerful learning environment"
                columns={[
                    'Self-directed learning requires a powerful learning environment with a very clear structure and design. Self-directed learning does not mean that the students have to process the learning material on their own. On the contrary, if there is one form of education that allows the individuality of students to be taken into account as much as possible, it is this one. Those who need more support, get it. Self-directed learning does not happen automatically. Pupils are given the opportunity to grow in this. Support is only phased out when the pupil is ready for it. An important approach to start with self-directed learning in an innovative learning environment is to better deal with the individuality of different pupils in the class. Previous research has shown that teachers feel that this way they can respond much better to the diverse needs of students than in the "traditional system".',
                    'With this follow-up research we want to meet those needs by developing a professionalisation tool for school teams. The aim of the project is to develop a tool to support teachers in their didactic actions with regard to self-directed learning in a powerful learning environment. The development is currently in progress in a React framework linked to the Strapi CMS.'
                ]}
            />

            <Video 
                url="https://www.youtube.com/watch?v=pHIwTBsta-M"
            />

            <Visit 
                title="Visit soon at"
                url="www.route-z.be"
            />
        </BaseLayout>
    )
};