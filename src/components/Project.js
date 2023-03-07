import { react, nodejs } from '../assets/logos.js';
import proj_img from '../assets/proj_img.png';
import Logo from './Logo.js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function Projects() {

    const projects = [
        {
            name: 'Recipely',
            description: (
                <p>Recipely is a web application designed for home-cook and professional chefs. With the help of Spoonacular API, 
                    the app aims to reduce food wastage by helping the user to keep track of remaining ingredients in their
                    inventory. Suggested recipes based on the user's inventory are also provided by the app to give users more
                    options.
                </p>
            ),
            skills: [react, nodejs]
        },
        {
            name: 'Sentimental Analysis on Tesla Tweets (NLP)',
            description: (
                <p>
                    Developed an application in Python to apply sentimental analysis and classification on Tesla Tweets using models
                    like RoBERTa, VADER and XGBoost with an accuracy of 87.6%. Spam and objectivity detection models were also in
                    place to sieve out relevant data.
                </p>
            ),
            skills: []
        }
    ]

    return (
        <div className="w-full h-fit pl-[10%] py-10 bg-[#19192C]">
            <h1 className="text-5xl text-[#ADEFD1FF] pb-10">Projects</h1>
            <div className="flex flex-col h-full w-full lg:flex-row lg:w-[85%]">
                {projects.map((item,index) => (
                    <div className="pr-10 pb-10 h-full w-[95%] lg:w-[30rem] lg:pb-0">
                        <Card className="h-full" key={index}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={proj_img}
                            />
                            <CardContent>
                                <h1 className="text-4xl font-bold">{item.name}</h1>
                                <p className="py-4">{item.description}</p>
                                <Logo logos={item.skills} />
                            </CardContent>
                            {/* <Button size="small">Learn More</Button> */}
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}