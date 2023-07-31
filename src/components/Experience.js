import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MH_pic from '../assets/mann_hummel_logo.png';
import Govtech from '../assets/govtech.gif';
import { django, matplotlib, pandas, python, seaborn, powerBi, gitlab, nextjs, typescript, go, docker } from "../assets/logos.js";
import Logo from './Logo.js';

export default function Experiences() {

    const experiences =[
        {
            company: "Government Technology Agency",
            title: "Software Engineering Intern",
            date: 'Jan 2023 - Present',
            image: Govtech,
            description:(
                <>
                    <p className="pb-2">Being part of SHIP-HATS within SGTS (Singapore Government Tech Stack), I was tasked with the following projects:</p>
                    <p className="underline pb-2">ChatOps Automation</p>
                    <ul className="list-disc pl-4 pb-2">
                        <li>Developed an automation tool utilising Workato Slackbot, Gitlab CI/CD and AWS Lambda functions to migrate repositories from Bitbucket to Gitlab</li>
                        <li>Greatly improved the efficiency of migration specialists by 1500 man hours</li>
                    </ul>
                    <p className="underline pb-2">DevSecOps Maturity Report</p>
                    <ul className="list-disc pl-4">
                        <li>Developed a DevSecOps Maturity Report that will be tracks whether projects comply to the industry standards (IM8, CNCF, SLSA, OWASP)</li>
                        <li>Frontend utilises NextJS and ReactJS, while backend is built on top of Golang</li>
                        <li>Incorporated Gitlab's CI/CD Pipeline for more seamless code integrations and deployments</li>
                    </ul>
                </>
            ),
            skills: [gitlab, nextjs, typescript, go, docker]
        },
        {
            company: 'Mann+Hummel Ventures Pte Ltd',
            title: 'Software Engineering Intern',
            date: 'May 2022 - July 2022',
            image: MH_pic,
            description:(
                <>
                    <p className="pb-2">Being part of the Data Science and Analytics Team, I was tasked with the following project:</p>
                    <p className="underline pb-2">Data Input Tool</p>
                    <ul className="list-disc pl-4 pb-2">
                        <li>Developed a data input tool using Django framework and hosted on AWS EC2 using RDS(PostgresQL)</li>
                    </ul>
                    <p className="underline pb-2">Data Analysis</p>
                    <ul className="list-disc pl-4">
                        <li>Analysed data to identify trends and key features that made machine learning model outperform workers' prediction in stocking up inventories</li>
                    </ul>
                </>
            ),
            skills: [python, django, pandas, matplotlib, seaborn, powerBi]
        }
    ]

    return (
        <div className="w-full h-fit pl-[10%] py-10">
            <h1 className="text-5xl text-beige pb-10">Experiences</h1>
            <div className="w-[90%] lg:w-[75%]">
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
                                    <p className="py-4 text-gray-200">{item.description}</p>
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