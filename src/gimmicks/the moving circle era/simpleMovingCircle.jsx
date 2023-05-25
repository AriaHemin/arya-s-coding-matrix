import './simpleCircle.css'

export default function SimpleMovingCircle(){

    return(
        <>
            <div>i am a moving circle</div>     
            <div className="relative w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded " >
                <div className="m-0 w-[50px] h-[50px] bg-white rounded-full move " ></div>
            </div>
        </>
    )

}