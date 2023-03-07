import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [isDarkMode, setDarkMode] = useState(false)
    const toggleDarkMode = (checked) => {
        setDarkMode(checked)
    }

    return (
        <>
            <div className="flex justify-between w-full h-full">
                <div className="flex items-center pl-8 lg:pl-24 text-3xl font-bold text-pink-100">
                    <Link 
                        className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                        before:bottom-0 before:left-0 before:bg-white
                        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                        before:transition before:ease-in-out before:duration-300" 
                        activeClass="active" 
                        smooth spy to="landing">
                            <h1>Ye Quan</h1>
                    </Link>
                </div>
                <div className="flex items-center text-lg text-fuchsia-100">
                    <ul className="hidden lg:block">
                        <li className="inline pr-24 cursor-pointer">
                            <Link 
                                className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                                before:bottom-0 before:left-0 before:bg-white
                                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                                before:transition before:ease-in-out before:duration-300" 
                                activeClass="active" 
                                smooth spy to="about">
                                    About
                            </Link>
                        </li>
                        <li className="inline pr-24 cursor-pointer">
                            <Link 
                                className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                                before:bottom-0 before:left-0 before:bg-white
                                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                                before:transition before:ease-in-out before:duration-300" 
                                activeClass="active"
                                smooth spy to="experiences">
                                    Experiences
                            </Link>
                        </li>
                        <li className="inline pr-24 cursor-pointer">
                            <Link 
                                className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                                before:bottom-0 before:left-0 before:bg-white
                                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                                before:transition before:ease-in-out before:duration-300" 
                                activeClass="active" 
                                smooth spy to="projects">
                                    Projects
                            </Link>
                        </li>
                    </ul>
                    <DarkModeSwitch
                        style={{ marginRight: '2rem' }}
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={30}
                    />
                </div>
            </div>
        </>
    )
}