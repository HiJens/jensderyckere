export default function Details({ columns }) {
    return (
        <section className="details">
            <div className="container pt-12 pb-6 px-6 sm:px-10 md:px-16 lg:mx-auto">
                <div className="flex flex-wrap">
                    {
                        columns && columns.map((column, index) => {
                            return (
                                <div className="details-column flex mr-16 mb-4" key={index}>
                                    <span className="label w-16 text-sm text-grey font-semibold tracking-widest uppercase mr-4">{column.title}</span>
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