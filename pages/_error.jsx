import { BaseLayout } from "../layouts";
import { ErrorContent } from "../partials";

export default function Error() {
    return (
        <BaseLayout title="404">
            <ErrorContent />
        </BaseLayout>
    )
};