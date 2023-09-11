export default function Footer() {
    return <footer className="bg-white w-full mt-20 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a className="flex items-center mb-4 sm:mb-0"> 
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Xavier Morell</span>
                </a>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center">© { new Date().getFullYear() }<a href="https://flowbite.com/" className="hover:underline"></a>, All Rights Reserved.</span>
        </div>
    </footer>
}