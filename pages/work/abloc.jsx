// Layouts
import { BaseLayout } from "../../layouts";

// Partials
import { Hero } from "../../partials/Work";

// Images
import HeroImage from "../../public/assets/images/abloc.jpeg";

export default function Abloc() {
    return (
        <BaseLayout title="A'Bloc Coaching">
            <Hero 
                title="A'Bloc Coaching"
                image={HeroImage}
            />
        </BaseLayout>
    )
}