import { useState } from "react"


export default function SimpleMovingCircleJs(){
    const [position, setPosition] = useState(0)

    function move (x){
        x === "right" ? setPosition(position + 10) : x === "left" ? setPosition(position - 10) : console.log("nothing")
    }


    const handleKeyDown = e => {
        console.log(e.key)
        e.key === "ArrowRight" ? move("right") : e.key === "ArrowLeft" ? move("left") : null
    };
      

    return(
        <div tabIndex={-1} onKeyDown={handleKeyDown}>
            <div>i am a moving circle that move on key press</div>     
            <div className="w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded " >
                <div  className="relative m-0 w-[50px] h-[50px] bg-white rounded-full" style={{ transform: `translate(${position}px)`}} ></div>
            </div>
        </div>
    )

}
