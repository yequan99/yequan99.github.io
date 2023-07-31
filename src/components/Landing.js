import Typed from "typed.js";
import { useEffect, useRef } from "react";
import resume from '../assets/TanYeQuan_Resume.pdf';
import profile_pic from "../assets/photo.jpg";

export default function Landing() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Aspiring Software Engineer", "Aspiring DevOps Engineer"], 
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });

        // Destroying
        return () => {
        typed.destroy();
        };
    }, []);

    return(
        <div className="flex flex-col-reverse w-full h-full items-center lg:pb-16 lg:pl-[10%] lg:flex-row">
            <div className="w-full text-center h-[55%] lg:h-fit lg:w-[45%] lg:text-left">
                <span className="text-xl text-maroon">Hello, my name is</span>
                <ul>
                    <li className="pt-10 text-6xl text-gray-200">Tan Ye Quan</li>
                    <li className="pt-10 pb-12 text-4xl text-beige" ref={el} />
                </ul>
                <div className="m-auto border-2 border-white rounded-lg w-32 cursor-pointer text-center transition ease-in-out delay-350 hover:-translate-y-1 lg:m-0">
                    <a className="text-gray-200 p-8 leading-[4rem] w-full h-full" href={resume} target="_blank" rel="noreferrer">Resume</a>
                </div>
            </div>
            <div className="flex items-end pb-12 w-full h-[45%] lg:h-fit lg:w-[55%] lg:pb-0">
                <img className="mx-auto h-[11rem] w-[10rem] rounded-[50%] lg:m-0 lg:h-[22rem] lg:w-[21rem]" src={profile_pic} alt="Tan Ye Quan" />
            </div>
        </div>
    );
}