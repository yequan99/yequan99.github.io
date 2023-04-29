import { UilGithub, UilLinkedin, UilEnvelopeAlt } from '@iconscout/react-unicons';

export default function Sidebar() {

    const socialIcons = {
        github: "https://github.com/yequan99?tab=repositories",
        linkedin: "https://www.linkedin.com/in/tan-ye-quan-232871193/",
        email: "mailto:YTAN213@e.ntu.edu.sg"
    }

    return (
        <div className="flex flex-col w-full h-full">
            <div className="lg:hidden text-center text-gray-400">
                <h1 className="text-xl pb-4">Let's stay connected!</h1>
            </div>
            <div className="flex mt-auto w-full justify-center">
                <ul>
                    <li className="inline-block lg:block pb-4 pr-4 lg:pr-0">
                        <a href={socialIcons.github} target="_blank" rel="noopener noreferrer">
                            <UilGithub className="text-gray-400 transition ease-in-out delay-350 hover:-translate-y-1" size="2.5rem" />
                        </a>
                    </li>
                    <li className="inline-block lg:block pb-4 pr-4 lg:pr-0">
                        <a href={socialIcons.linkedin} target="_blank" rel="noopener noreferrer">
                            <UilLinkedin className="text-gray-400 transition ease-in-out delay-350 hover:-translate-y-1" size="2.5rem" />
                        </a>
                    </li>
                    <li className="inline-block lg:block pb-4 pr-4 lg:pr-0">
                        <a href={socialIcons.email} target="_blank" rel="noopener noreferrer">
                            <UilEnvelopeAlt className="text-gray-400 transition ease-in-out delay-350 hover:-translate-y-1" size="2.5rem" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="border-l-2 border-gray-500 left-1/2 h-1/5 relative"></div>
        </div>
    )
}