import { UilGithub, UilLinkedin, UilEnvelopeAlt } from '@iconscout/react-unicons';

export default function Sidebar() {

    const socialIcons = {
        github: "https://github.com/yequan99?tab=repositories",
        linkedin: "https://www.linkedin.com/in/tan-ye-quan-232871193/",
        email: "mailto:YTAN213@e.ntu.edu.sg"
    }

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex mt-auto w-full justify-center">
                <ul>
                    <li className="pb-4">
                        <a href={socialIcons.github} target="_blank" rel="noopener noreferrer">
                            <UilGithub className="text-gray-400 transition ease-in-out delay-350 hover:-translate-y-1" size="2.5rem" />
                        </a>
                    </li>
                    <li className="pb-4">
                        <a href={socialIcons.linkedin} target="_blank" rel="noopener noreferrer">
                            <UilLinkedin className="text-gray-400 transition ease-in-out delay-350 hover:-translate-y-1" size="2.5rem" />
                        </a>
                    </li>
                    <li className="pb-4">
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