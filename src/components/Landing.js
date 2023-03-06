import Typed from "typed.js";
import { useEffect, useRef } from "react";
import resume from '../assets/TanYeQuan_Resume.pdf';
import profile_pic from "../assets/photo.jpg";

export default function Landing() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Hello, my name is"], 
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
        <div className="flex flex-col-reverse pl-[10%] w-full h-full items-center lg:flex-row">
            <div className="w-full text-center lg:h-[50%] lg:w-[45%] lg:text-left">
                <span className="text-xl text-[#ADEFD1FF]" ref={el}></span>
                <ul>
                    <li className="pt-10 text-6xl text-[#ADEFD1FF]">Tan Ye Quan</li>
                    <li className="pt-10 pb-12 text-3xl text-[#ADEFD1FF]">Aspiring Software Engineer</li>
                </ul>
                <div className="border-2 border-[#ADEFD1FF] rounded-lg w-32 cursor-pointer text-center transition ease-in-out delay-350 hover:-translate-y-1">
                    <a className="text-[#ADEFD1FF] leading-[4rem] w-full h-full block" href={resume} target="_blank" rel="noreferrer">Resume</a>
                </div>
            </div>
            <div className="w-full pb-10 lg:h-[50%] lg:w-[55%] lg:pb-0">
                <img className="h-[11rem] w-[10rem] rounded-[50%] lg:h-[20rem] lg:w-[18rem]" src={profile_pic} alt="Tan Ye Quan" />
            </div>
        </div>
    );
}