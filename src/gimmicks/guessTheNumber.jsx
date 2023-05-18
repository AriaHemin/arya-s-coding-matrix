import { useEffect, useState} from "react";

export default function GuessTheNumber(){
    const [userInput, setUserInput] = useState()
    const [numberToGuess, setNumberToGuess] = useState()
    const [message, setMessage] = useState('guess a number from 1 to 9')
    const [tries, setTries] = useState(0)

    function setRandomNumber(){
        let n = Math.ceil(Math.random() * 9 )
        
        return n
    }

    useEffect(()=>{
        let n = setRandomNumber()
        setNumberToGuess(n)
    },[])


    function guess(){
        setTries(tries + 1)
        if(userInput > 9 || userInput < 1 || typeof(userInput) != 'number' ){
            setMessage("please enter a sutibale number")
        }else if(userInput == numberToGuess){
            setMessage("you guessed it right")
        }else if(userInput > numberToGuess){
            setMessage("pick a smaller number")
        }else if(userInput < numberToGuess){
            setMessage("pick a larger number")
        }
    }


    return(
        <>
            <div>{tries >= 3 ? 'you lost' : message}</div>
            <input className="border" onChange={(e)=>{setUserInput(Number(e.target.value))}} />
            <button onClick={()=>{guess()}} >guess</button>
        </>
    )

}
