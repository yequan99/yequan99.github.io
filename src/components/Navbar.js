export default function Navbar() {
    return (
        <>
            <div className="flex justify-between w-full h-full bg-yellow-400">
                <div className="flex items-center pl-24 text-4xl font-bold">
                    <h1>Ye Quan</h1>
                </div>
                <div className="flex items-center text-xl">
                    <ul>
                        <li className="inline pr-24">About</li>
                        <li className="inline pr-24">Experience</li>
                        <li className="inline pr-24">Projects</li>
                    </ul>
                </div>
            </div>
        </>
    )
}