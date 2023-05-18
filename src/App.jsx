import { useState } from 'react'
import './App.css'
import Counter from './gimmicks/counter'
import GuessTheNumber from './gimmicks/guessTheNumber'

function App() {
  const [gimmick, setGimmick] = useState(1)

  return (
    <>
      <div className='flex flex-row justify-center' >
        <div onClick={()=>{gimmick >= 2 ? setGimmick(gimmick - 1) : null}} >-</div>
        <div className='mx-2'>{gimmick}</div>
        <div onClick={()=>{gimmick <= 1 ? setGimmick(gimmick + 1) : null}} >+</div>
      </div>
      {
        gimmick === 1 ? <Counter/> : <GuessTheNumber/>
      }
      
    </>
  )
}

export default App
