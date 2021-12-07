export default function Text({ title, columns }) {
    return (
        <section className="text">
            <div className="container md:py-14 py-10 px-6 sm:px-10 md:px-16 lg:mx-auto">
                {
                    title && (
                        <h2 className="text-title text-black font-semibold text-md" data-aos="fade-up">
                            {title}
                        </h2>
                    )
                }

                <div className="text-content grid grid-cols-12 gap-4 lg:gap-10 mt-6">
                    {
                        columns.map((column, i) => {
                            return (
                                <div className="lg:col-span-6 col-span-full" data-aos="fade-up" data-aos-delay={i * 250} key={i}>
                                    <p className="text-sm text-black font-light mb-0">
                                        {column}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};