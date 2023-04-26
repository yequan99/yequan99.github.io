import Logo from './Logo.js';
import { python, javascript, typescript, java, c, django, react, git, go, nextjs, docker } from '../assets/logos.js';

export default function About() {

    const languages = [python, javascript, typescript, go, java, c]
    const framework = [django, react, nextjs, git, docker]

    return(
        <div className="flex flex-col w-full h-fit pl-[10%] py-10 lg:flex-row">
            <div className="w-full lg:w-[50%]">
                <h1 className="text-5xl text-beige pb-10">About Me</h1>
                <div className="w-[85%] text-gray-200">
                    <p className="pb-5 text-xl text-justify">
                        I am Ye Quan, a final year Computer Science undergraduate at Nanyang Technological University (NTU) and I am 
                        really passionate in the fields of Software Engineering and DevOps.
                    </p>
                    <p className="text-xl text-justify">
                        Since young, I am always curious to learn and explore new things. Inquisitiveness has been part of me since
                        the beginning and this has driven me to explore many subjects. As I became exposed to programming, I realized 
                        it was the perfect outlet for my inquisitive nature to solve real-world problems. I believe that continuous 
                        learning and a desire to explore the unknown are key traits for success in any field, and I strive to embody 
                        those traits every day.
                    </p>
                </div>
            </div>
            <div className="pt-10 w-[85%] lg:w-[35%] lg:pt-0">
                <h1 className="text-5xl text-beige pb-10">Skills</h1>
                <h1 className="text-xl text-gray-200 pb-5">Languages</h1>
                <div className="w-full">
                    <Logo logos={languages} />
                </div>
                <h1 className="text-xl text-gray-200 py-5">Frameworks & Tools</h1>
                <div className="w-full">
                    <Logo logos={framework} />
                </div>
            </div>
        </div>
    );
}