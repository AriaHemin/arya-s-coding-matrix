import { useState } from 'react'
import './App.css'
import Counter from './gimmicks/counter'
import GuessTheNumber from './gimmicks/guessTheNumber'
import SimpleMovingCircle from './gimmicks/the moving circle era/simpleMovingCircle'

function App() {
  const [gimmickCount, setGimmickCount] = useState(0)
  // eslint-disable-next-line react/jsx-key
  const gimmick = [<Counter/>, <GuessTheNumber/>, <SimpleMovingCircle/>]
  return (
    <>
      <div className='flex flex-row justify-center' >
        <div onClick={()=>{setGimmickCount(gimmickCount - 1)}} >-</div>
        <div>{gimmickCount + 1}</div>
        <div onClick={()=>{setGimmickCount(gimmickCount + 1)}} >+</div>
      </div>
      <div className='flex items-center justify-center flex-col' >
        {
        gimmick[gimmickCount]
        }
      </div>
    </>
  )
}

export default App
