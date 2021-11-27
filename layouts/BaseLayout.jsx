import { Header } from "../partials";

export default function BaseLayout({ children }) {
    return (
        <div className="base-layout">
            <Header />

            <main className="pt-28">
                {children}
            </main>
        </div>
    )
};
