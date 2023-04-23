import Logo from './Logo.js';
import { python, javascript, typescript, java, c, django, react, snowflake, mysql, git, psql, go } from '../assets/logos.js';

export default function About() {

    const languages = [python, javascript, typescript, go, java, c]
    const framework = [django, react, git, psql, mysql, snowflake]

    return(
        <div className="flex flex-col w-full h-fit pl-[10%] py-10 bg-[#19192C] lg:flex-row">
            <div className="w-full lg:w-[45%]">
                <h1 className="text-5xl text-[#ADEFD1FF] pb-10">About Me</h1>
                <div className="w-[85%]">
                    <p className="pb-5 text-xl text-[#ADEFD1FF] text-justify">
                        I am Ye Quan, a final year Computer Science undergraduate at Nanyang Technological University (NTU) 
                        majoring in Data Science and Artificial Intelligence.
                    </p>
                    <p className="text-xl text-[#ADEFD1FF] text-justify">
                        Since young, I am always curious to learn and explore new things. Inquisitiveness has been part of me since
                        the beginning and this has driven me to explore many subjects. As I became exposed to programming, I realized 
                        it was the perfect outlet for my inquisitive nature to solve real-world problems. I believe that continuous 
                        learning and a desire to explore the unknown are key traits for success in any field, and I strive to embody 
                        those traits every day.
                    </p>
                </div>
            </div>
            <div className="pt-10 w-full lg:w-[55%] lg:pt-0">
                <h1 className="text-5xl text-[#ADEFD1FF] pb-10">Skills</h1>
                <h1 className="text-xl text-[#ADEFD1FF] pb-5">Languages</h1>
                <Logo logos={languages} />
                <h1 className="text-xl text-[#ADEFD1FF] py-5">Frameworks & Tools</h1>
                <Logo logos={framework} />
            </div>
        </div>
    );
}