export default function Navigator() {
    return <nav className="w-full bg-white p-3 shadow-md flex justify-between items-center">
        <div className="flex items-center">
            <h1 className="flex items-center text-3xl font-extrabold">
                Portfolio
                <span className="bg-red-100 text-red-800 font-semibold mr-2 px-2.5 py-0.5 rounded ml-2 text-lg">FULLSTACK</span>
            </h1>
            
            <ul className="flex ml-10 flex-wrap gap-7">
                <li className="cursor-pointer">Profile</li>
                <li className="cursor-pointer">Repositories</li>
                <li className="cursor-pointer">Socials</li>
                <li className="cursor-pointer">Blog</li>
            </ul>
        </div>

        <div className="flex items-center gap-5 text-gray-600">
            <span title="Notifications/News" className="material-symbols-outlined cursor-pointer">notifications</span>
            <span title="Theme" className="material-symbols-outlined cursor-pointer">light_mode</span>

            {/* <div className="bg-red-400 text-white rounded-full p-2.5 text-md">
                XM
            </div> */}

            <button className="py-2.5 px-10 bg-red-400 text-white rounded-lg">Login</button>
        </div>
    </nav>
}