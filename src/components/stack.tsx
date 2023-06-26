import { getJsonData } from "@/services/getJson";
import { useEffect, useState } from "react" 

export default function RenderStack() {
    const [stackItems, handleStack] = useState<string[]>([]);

    const getData = async () => {
        const { stack } : any = await getJsonData(); 

        if(stack) handleStack(stack); 
    }

    useEffect(() => {
        getData(); 
    }, [])
    
    return <div className="mt-40 flex flex-wrap gap-20 justify-center w-11/12 relative">
        {
            stackItems && stackItems.map((item:string) => {
                return <img title={ item } key={ item } width={ 80 } className="cursor-pointer" src={ `/stack/${ item }.svg` } alt={ item } />
            })
        }

        <div className="absolute big-title">Stack</div>
    </div>
} 