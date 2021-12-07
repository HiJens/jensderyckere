import ReactPlayer from 'react-player';

export default function Video({ url }) {
    return (
        <section className="video">
            <div className="container md:py-20 py-10 px-6 sm:px-10 md:px-16 lg:mx-auto">
                <div className="video-wrapper border-2 border-black" data-aos="fade-up">
                    <ReactPlayer 
                        className="video-player" 
                        url={url} 
                        width="100%" 
                        height="100%" 
                    />
                </div>
            </div>
        </section>
    )
};