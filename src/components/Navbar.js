import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Navbar() {
    const [isDarkMode, setDarkMode] = useState(false)
    const toggleDarkMode = (checked) => {
        setDarkMode(checked)
    }

    return (
        <>
            <div className="flex justify-between w-full h-full">
                <div className="flex items-center pl-8 lg:pl-24 text-3xl font-bold text-pink-100">
                    <h1>Ye Quan</h1>
                </div>
                <div className="flex items-center text-lg text-fuchsia-100">
                    <ul className="hidden lg:block">
                        <li className="inline pr-24">About</li>
                        <li className="inline pr-24">Experience</li>
                        <li className="inline pr-24">Projects</li>
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