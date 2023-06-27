import Footer from "@/components/footer"
import Navigator from "@/components/navigator"  
import TimeLine from "@/components/time-line"; 
import RenderStack from "@/components/stack";
import ContactForm from "@/components/contact-form";
import Repositories from "@/components/repositories";

export default function Home() {
    return <>
        <div className="flex flex-col items-center transition-all">
            <Navigator/>

            <main className="w-full flex flex-col items-center xl:w-2/3" style={{ zIndex: 5 }}>   
                <div className="flex flex-col md:flex-row mt-20 items-center justify-evenly">
                    <div className="w-2/3 lg:w-1/3 ml-10 lg:ml-0 mb-10 lg:mb-0">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Xavier Morell, <span className="text-red-500">Fullstack</span> developer</h1>
                        
                        <p className="mt-10 text-lg font-normal text-neutral-200 lg:text-xl">Hello, my name is Xavi, I'm 19 years old and I'm from Barcelona, I started programming approximately in October 2020 on the FiveM platform, today I'm working in a company as a Fullstack developer with Laravel, Blade, SQL and React. </p>
                        
                        <div className="flex mt-10">
                            <img className="image-ratio" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github" />
                            <img className="image-ratio" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Twitter" />
                            <img className="image-ratio" src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="LinkedIn" />
                        </div>
                    </div>

                    <img src="https://talently.tech/blog/wp-content/uploads/2023/01/sueldo-de-un-programador.png" className="object-scale-down" style={{ maxWidth: '500px' }} />
                </div>  

                <div className="w-11/12 md:w-9/12 mt-60 flex flex-col md:flex-row items-center">
                    <div className="mr-10 flex flex-row md:flex-col w-11/12 items-center mb-20 md:mb-0 md:h-[300px]">
                        <img className="w-20" src="https://mybacktolifechiropractic.com/wp-content/uploads/2016/06/Clock-PNG-Clipart.png" alt="Clock" />
                        <div className="flex-1 my-5 bg-red-500 opacity-20 sm:h-[2px] sm:ml-5 md:w-[2px]"></div>
                        <span className="sm:ml-5 md:rotate-[-90deg] md:mt-5 md:mb-5">Timeline</span>
                    </div>

                    <TimeLine />
                </div>
                
                <RenderStack />

                <div className="w-11/12 mt-40">
                    <h2 className="text-4xl font-serif">Github Repositories</h2> 

                    <Repositories />
                </div> 

                <ContactForm />
            </main>

            {/* 
                - Blog
                - Login modal using layouts and screen. 
                - Portfolio statistics (Views, Comments, posts, etc)
                - Dropdown to logout
                - Add google to sign-in option (Apple, Gmail, Twitter, etc)
                - Favicon
                - My own image  
                - CV 
                - Publicaciones de twitter
                - Formulario de contacto 
                - @ IMP: Meter otro grid desde el centro hacia fuera en los repositories
            */}

            <Footer />
        </div>

        {/* <svg className="grid" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5"/>
                </pattern>
                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="url(#smallGrid)"/>
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1"/>
                </pattern>
            </defs>
                
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg> */}

        <section className="section bg-zinc-700"> 
            <div className="curve after:bg-zinc-700"></div>
        </section>
    </>
}