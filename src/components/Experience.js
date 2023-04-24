import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MH_pic from '../assets/mann_hummel_logo.png';
import Govtech from '../assets/govtech.gif';
import { django, matplotlib, pandas, python, seaborn, powerBi, gitlab, nextjs, typescript, go } from "../assets/logos.js";
import Logo from './Logo.js';

export default function Experiences() {

    const experiences =[
        {
            company: "Government Technology Agency",
            title: "Software Engineering Intern",
            date: 'Jan 2023 - July 2023',
            image: Govtech,
            description:(
                <ul className="list-disc">
                    <li>Built a CI/CD pipeline for repository migration using GitLab and incorporating ChatOps automation</li>
                    <li>Developed a DevSecOps maturity report to track whether Gitlab projects comply to industry security best practices (IM8, CNCF, SLSA, OWASP). Front-end is using nextJS and react, while back-end uses Golang.</li>
                </ul>
            ),
            skills: [gitlab, nextjs, typescript, go]
        },
        {
            company: 'Mann+Hummel Ventures Pte Ltd',
            title: 'Software Engineering Intern',
            date: 'May 2022 - July 2022',
            image: MH_pic,
            description:(
                <ul className="list-disc">
                    <li>Spearheaded the development of a Data Input Tool using Django Framework and hosted on AWS EC2 using RDS(PostgreSQL) </li>
                    <li>Analysed data to identify trends and key features that made machine learning model outperform workers' prediction in stocking up inventories</li>
                    <li>Applied agile methodology</li>
                </ul>
            ),
            skills: [python, django, pandas, matplotlib, seaborn, powerBi]
        }
    ]

    return (
        <div className="w-full h-fit pl-[10%] py-10">
            <h1 className="text-5xl text-beige pb-10">Experiences</h1>
            <div className="w-[75%]">
                <Timeline sx={{[`& .${timelineItemClasses.root}:before`]: {flex: 0, padding: 0}}}>
                    {experiences.map((item,index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="font-pathway">
                                    <h3 className="text-gray-200">{item.date}</h3>
                                    <img className="h-[5.5rem] w-auto py-4" src={item.image} alt={index} />
                                    <h3 className="italic text-maroon">{item.company}</h3>
                                    <h3 className="text-beige">{item.title}</h3>
                                    <p className="py-4 pl-[1.1rem] text-gray-200">{item.description}</p>
                                    <Logo logos={item.skills} />
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </div>
    );
}