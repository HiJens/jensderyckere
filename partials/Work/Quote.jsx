export default function Quote({ title, name }) {
    return (
        <section className="quote">
            <div className="container md:py-14 py-10 px-6 sm:px-10 md:px-16 lg:mx-auto flex justify-center" data-aos="fade-up">
                <div className="max-w-md">
                    <span className="text-sm text-grey font-light text-center">
                        <strong className="text-black text-lg font-semibold mr-3">"{title}"</strong> ~ {name}
                    </span>
                </div>
            </div>
        </section>
    )
};