import { useState, useEffect } from "react"


export default function SimpleMovingCircleJs(){
    const [positionX, setPositionX] = useState(0)
    const [positionY, setPositionY] = useState(0)
    
    const speed = 25;

    useEffect(() => {
        function move (x){
            x === "right" && positionX < 450 ? setPositionX(positionX + speed) :null 
            x === "left" && positionX > 0 ? setPositionX(positionX - speed) :null 
            x === "up" && positionY > 0 ? setPositionY(positionY - speed) :null 
            x === "down" && positionY < 450 ? setPositionY(positionY + speed) :null 
        }

        const handleKeyDown = e => {
            e.key === "ArrowRight" ? move("right") : null 
            e.key === "ArrowLeft" ? move("left") : null 
            e.key === "ArrowUp" ? move("up") : null 
            e.key === "ArrowDown" ? move("down") : null
            console.log(e.key, `(${positionX} , ${positionY})`)            
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

      });

    return(
        <div>
            <div>i am a moving circle that move on key press</div>     
            <div className="w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded " >
                <div  className="relative m-0 w-[50px] h-[50px] bg-white rounded-full" style={{ transform: `translateX(${positionX}px) translateY(${positionY}px)`}} ></div>
            </div>
        </div>
    )

}
