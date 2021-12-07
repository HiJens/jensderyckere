// Components
import { LineFour } from "../../components";

export default function LeaveRequest() {
    return (
        <div className="request md:my-36 my-20" id="contact">
            <div className="container flex flex-col items-center px-6 sm:px-10 md:px-16 lg:mx-auto">
                <h3 className="title font-medium text-black text-center text-lg" data-aos="fade-down">
                    Leave a <span className="title-line title-line--v3">request <LineFour /></span>
                </h3>

                <p className="text mt-4 font-light text-black text-center text-sm max-w-md" data-aos="fade-up">
                    Do you have any questions? Or are you interested in one of the qualities offered? You can always contact me. Then together we can have a coffee and look for a suitable solution for you or your company.
                </p>

                <a href="mailto:jensderyckere@icloud.com" data-aos="fade-up" className="link flex items-center mt-4">
                    <span className="text-black font-semibold text-sm hover:underline">Get in touch</span>
                    <svg className="link-arrow ml-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 12L11.5 6M18 12L5.5 12L18 12ZM5.5 12L11.5 18L5.5 12Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    )
};
