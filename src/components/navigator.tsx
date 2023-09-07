export default function Navigator() {
    return <nav className="w-full p-3 flex justify-between items-center">
        <div className="items-center hidden md:flex">
            <h1 className="flex items-center text-3xl text-white font-extrabold">
                Portfolio
                <span className="bg-indigo-100 text-indigo-800 font-semibold mr-2 px-2.5 py-0.5 rounded ml-2 text-lg">FULLSTACK</span>
            </h1>
            
            <ul className="flex ml-10 flex-wrap gap-7 text-white">
                <li className="cursor-pointer">Profile</li>
                <li className="cursor-pointer">Repositories</li>
                <li className="cursor-pointer">Socials</li>
                <li className="cursor-pointer">Blog</li>
            </ul>
        </div>

        <span className="material-icons block md:hidden text-white text-2xl cursor-pointer">menu</span>

        <div className="flex items-center gap-5 text-white">
            <span title="Theme" className="material-symbols-outlined cursor-pointer">light_mode</span> 
        </div>
    </nav>
}