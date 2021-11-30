// Partials
import { Footer, Header } from "../partials";

// Next
import Head from "next/head";

export default function BaseLayout({ children, title, description }) {
    return (
        <div className="base-layout">
            <Head>
                <title>Jens Deryckere | {title ?? 'Home'}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Web development, UX design and service design. Three branches that I am constantly working in. They often call me a jack of all trades. I do not say no to that. In my career, I have had the opportunity to support many projects, which has led to a great deal of experience in many different positions."/>
                <meta name="keywords" content="web development, brugge, kortrijk, roeselare, ux design, webdeveloper, ux designer, service design, service designer, craft cms, javascript, react, vue, sass, miro, asana, notion, freelancer, jens deryckere" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <Header />

            <main className="pt-28">
                {children}
            </main>

            <Footer />
        </div>
    )
};
