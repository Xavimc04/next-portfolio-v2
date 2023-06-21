import { getJsonData } from "@/services/getJson";
import { ITimeLineItem } from "@/types"
import { useEffect, useState } from "react" 

export default function TimeLine() {
    const [items, handleItems] = useState<ITimeLineItem[]>([]);

    const getData = async () => {
        const { timeline } : any = await getJsonData(); 

        if(timeline) handleItems(timeline); 
    }

    useEffect(() => {
        getData(); 
    })
    
    return <ol className="relative border-l border-gray-200 ml-10">                  
        {
            items.map((item:ITimeLineItem) => {
                return <TimeLineItem item={ item } />
            })
        }
    </ol>
}

function TimeLineItem({ item } : { item: ITimeLineItem }) {
    return <li className="mb-10 ml-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-violet-100 rounded-full -left-3 ring-8 ring-white">
            <svg aria-hidden="true" className="w-3 h-3 text-violet-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">{ item.title }</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{ item.date }</time>
        <p className="mb-4 text-base font-normal text-gray-500">{ item.description }</p>
    </li>
}