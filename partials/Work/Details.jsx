export default function Details({ columns }) {
    return (
        <section className="details">
            <div className="container pt-12 pb-14 px-6 sm:px-10 md:px-16 lg:mx-auto">
                <div className="flex flex-wrap">
                    {
                        columns && columns.map((column, index) => {
                            return (
                                <div className="details-column flex md:mr-16 mb-4 md:mb-0" data-aos="fade-up" data-aos-delay={index * 250} key={index}>
                                    <span className="label lg:w-auto w-28 text-sm text-grey font-semibold tracking-widest uppercase mr-4">{column.title}</span>
                                    <span className="value text-sm text-black font-light">
                                        {
                                            column.values.map((value, i) => {
                                                return (
                                                    <>
                                                    {value}
                                                    {i !== column.values.length - 1 &&  <br/>}
                                                    </>
                                                )
                                            })
                                        }
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};