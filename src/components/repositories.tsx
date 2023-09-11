import { getGithubRepositories } from "@/services/github";
import { useEffect, useState } from "react"
import moment from "moment";
import { motion } from "framer-motion";

export default function Repositories() {
    const [repositories, setRepos] = useState<any>([]);
    const [filter, handleFilter] = useState<string>(''); 
    
    const fetchRepositories = async () => {
        const response = await getGithubRepositories();  

        if(response) {
            setRepos(response)
        }
    }

    useEffect(() => {
        fetchRepositories(); 
    }, []) 

    return <div>
        <input type="text" value={ filter } onChange={(e) => handleFilter(e.target.value)} className="bg-gray-50 mt-5 rounded-sm border focus:rounded-none border-1 focus:border-black transition-all text-gray-900 text-sm block w-full lg:w-2/4 p-2.5" placeholder="Monster maze" />
        <p className="mt-2 text-sm text-gray-500 mb-10">Apply filter to search into my { repositories ? repositories.length : 0 } Github repositories...</p>

        <div className="flex flex-wrap w-full mb-10 gap-7 justify-between">
            {
                repositories && repositories.filter((repo:any) => repo.name.toLowerCase().includes(filter)).map((repo:any, index:number) => {
                    return <motion.div 
                        layout
                        key={ index }
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }} className="bg-zinc-700 rounded-lg p-5 flex flex-col w-full md:w-[350px] 2xl:w-[400px]"
                    >
                        <h3 className="text-2xl text-white flex items-center select-none">
                            <a title="View repository" href={ repo.html_url } target="_BLANK" className="material-symbols-outlined bg-white text-zinc-700 p-2 mr-3 rounded-lg">rocket_launch</a>
                            { repo.name }
                        </h3>

                        <p className="mt-3 flex-1 text-gray-300">{ repo.description && repo.description.length > 0 ? repo.description : <a className="italic text-white">No description yet</a> }</p> 

                        <div className="mt-20 flex items-center justify-between text-white">
                            { repo.language }

                            <span>{ moment(repo.updated_at).fromNow() }</span>
                        </div> 
                    </motion.div>
                })
            }
        </div>
    </div>
}