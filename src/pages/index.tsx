import Footer from "@/components/footer"
import Navigator from "@/components/navigator" 
import { getGithubRepositories } from "@/services/github";
import { useEffect, useState } from "react"
import moment from "moment";

export default function Home() {
    const [repositories, setRepos] = useState<any>([]);
    
    const fetchRepositories = async () => {
        const response = await getGithubRepositories(); 

        if(response) {
            setRepos(response)
        }
    }

    useEffect(() => {
        fetchRepositories(); 
    }, [])

    return <>
        <div className="flex flex-col items-center z-10">
            <Navigator/>

            <main className="w-full flex flex-col items-center xl:w-2/3">   
                <div className="flex flex-col md:flex-row mt-20 items-center justify-evenly">
                    <div className="w-2/3 lg:w-1/3 ml-10 lg:ml-0 mb-10 lg:mb-0">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Xavier Morell, <span className="text-violet-900">Fullstack</span> developer</h1>
                        
                        <p className="mt-10 text-lg font-normal text-white lg:text-xl">Hello, my name is Xavi, I'm 19 years old and I'm from Barcelona, I started programming approximately in October 2020 on the FiveM platform, today I'm working in a company as a Fullstack developer with Laravel, Blade, SQL and React. </p>
                        
                        <div className="flex mt-10">
                            <img className="image-ratio" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github" />
                            <img className="image-ratio" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Twitter" />
                            <img className="image-ratio" src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="LinkedIn" />
                        </div>
                    </div>

                    <img src="https://talently.tech/blog/wp-content/uploads/2023/01/sueldo-de-un-programador.png" className="object-scale-down" style={{ maxWidth: '500px' }} />
                </div>  

                <div className="w-full mt-40">
                    
                    <h2 className="text-4xl font-extrabold">Github Repositories</h2>
                    <p className="my-4 text-lg text-gray-500">{ repositories ? repositories.length : 0 } total repos...</p>

                    <input type="text" className="bg-black text-white mb-10" placeholder="Filter here..." />

                    <div className="flex overflow-x-auto space-x-8 w-full mb-10">
                        {
                            repositories && repositories.map((repo:any) => {
                                return <div className="bg-violet-300 mr-10 rounded-lg p-5 flex flex-col" style={{ minWidth: '400px'}}>
                                    <h3 className="text-2xl flex items-center">
                                        <a title="View repository" href={ repo.html_url } target="_BLANK" className="material-symbols-outlined bg-violet-100 text-violet-500 p-2 mr-3 rounded-lg">rocket_launch</a>
                                        { repo.name }
                                    </h3>

                                    <p className="mt-3 flex-1">{ repo.description }</p> 

                                    <div className="mt-20 flex items-center justify-between">
                                        { repo.language }

                                        <span>{ moment(repo.updated_at).fromNow() }</span>
                                    </div> 
                                </div>
                            })
                        }
                    </div>
                </div>
            </main>

            {/* 
                - Blog
                - Login modal using layouts and screen. 
                - Portfolio statistics (Views, Comments, posts, etc)
                - Dropdown to logout
                - Add google to sign-in option (Apple, Gmail, Twitter, etc)
                - Favicon
                - My own image
                - Roadmap de trabajos y estudios
                - Certificaciones
                - CV
                - Skills/tecnologias
                - Proyectos (Link con github)
                - Publicaciones de twitter
                - Formulario de contacto
                - Footer
            */}

            {/* <Footer /> */}
        </div>

        <section className="section"> 
            <div className="curve"></div>
        </section>
    </>
}