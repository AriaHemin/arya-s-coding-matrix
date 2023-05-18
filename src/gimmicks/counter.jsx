import { useState} from "react";

export default function Counter(){

    const [count, setCount] = useState(0)

    return(
        <>
            <div className="text-3xl" >{count}</div>
            <button className="text-3xl mx-2" onClick={()=>{setCount(count - 1)}} >-</button>
            <button className="text-3xl mx-2" onClick={()=>{setCount(count + 1)}} >+</button>        
        </>
    )

}

