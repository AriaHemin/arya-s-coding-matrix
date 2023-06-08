import { useState } from "react"


export default function FollowingCircleJs(){
    const [positionX, setPositionX] = useState(0)
    const [positionY, setPositionY] = useState(0)
    
    // const speed = 25;

    /*function move (x){
        x === "right" && positionX < 450 ? setPositionX(positionX + speed) :null 
        x === "left" && positionX > 0 ? setPositionX(positionX - speed) :null 
        x === "up" && positionY > 0 ? setPositionY(positionY - speed) :null 
        x === "down" && positionY < 450 ? setPositionY(positionY + speed) :null 
    }
    */

    const handleMouseOver = e => {
        console.log(e)
        setPositionX(e.clientX - 450)
        setPositionY(e.clientY - 50)
        // e.key === "ArrowRight" ? move("right") : null 
        // e.key === "ArrowLeft" ? move("left") : null 
        // e.key === "ArrowUp" ? move("up") : null 
        // e.key === "ArrowDown" ? move("down") : null
        // console.log(e.key, `(${positionX} , ${positionY})`)            
    };


    return(
        <div>
            <div>i am a moving circle that move on key press</div>     
            <div onClick={(e)=>{handleMouseOver(e)}} className="w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded " >
                <div  className="relative m-0 w-[50px] h-[50px] bg-white rounded-full" style={{ transform: `translate(${positionX}px,${positionY}px)`}} ></div>
            </div>
        </div>
    )

}
