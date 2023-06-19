import Footer from "@/components/footer"
import Navigator from "@/components/navigator"

export default function Home() {
    return <>
        <div className="flex flex-col items-center z-10">
            <Navigator/>

            <main className="w-full flex flex-col items-center xl:w-2/3">   
                <div className="flex flex-col md:flex-row mt-20 items-center justify-evenly">
                    <div className="w-2/3 lg:w-1/3 ml-10 lg:ml-0 mb-10 lg:mb-0">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Xavier Morell, <span className="text-red-600">Fullstack</span> developer</h1>
                        <p className="mt-10 text-lg font-normal text-gray-500 lg:text-xl">Hello, my name is Xavi, I'm 19 years old and I'm from Barcelona, I started programming approximately in October 2020 on the FiveM platform, today I'm working in a company as a Fullstack developer with Laravel, Blade, SQL and React. </p>
                    </div>

                    <img src="https://talently.tech/blog/wp-content/uploads/2023/01/sueldo-de-un-programador.png" className="object-scale-down" style={{ maxWidth: '500px' }} />
                </div>
            </main>

            {/* <ul>
                <li>Roadmap de trabajos y estudios</li>
                <li>Certificaciones</li>
                <li>CV</li>
                <li>Skills/tecnologias</li>
                <li>Proyectos (Link con github)</li>
                <li>Publicaciones de twitter</li>
                <li>Formulario de contacto</li>
                <li>Footer</li>
            </ul> */}

            {/* <Footer /> */}
        </div>
    </>
}