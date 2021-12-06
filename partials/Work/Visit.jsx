export default function Visit({ url }) {
    return (
        <section className="visit">
            <div className="container pt-20 pb-32 px-6 sm:px-10 md:px-16 lg:mx-auto">
                <div className="flex flex-col items-center">
                    <h5 className="text-grey font-semibold text-center text-md">Visit at</h5>
                    <a href={`https://${url}`} target="_blank" className="text-black font-semibold text-center text-lg">{url}</a>
                </div>
            </div>
        </section>
    )
};