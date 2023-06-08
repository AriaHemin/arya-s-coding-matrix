import { useState } from 'react'
import './App.css'
import Counter from './gimmicks/counter'
import GuessTheNumber from './gimmicks/guessTheNumber'
import SimpleMovingCircle from './gimmicks/the moving circle era/simpleMovingCircle'
import SimpleMovingCircleJs from './gimmicks/the moving circle era/simple moving circle js/simpleMovingCIrcleJs'
import FollowingCircleJs from './gimmicks/the moving circle era/following circle js/followingCircleJs'

function App() {
  const [gimmickCount, setGimmickCount] = useState(0)
  // eslint-disable-next-line react/jsx-key
  const gimmick = [<Counter/>, <GuessTheNumber/>, <SimpleMovingCircle/>, <SimpleMovingCircleJs/> , <FollowingCircleJs/>]
  return (
    <>
      <div className='flex flex-row justify-center' >
        <button onClick={()=>{setGimmickCount(gimmickCount - 1)}} >-</button>
        <div>{gimmickCount + 1}</div>
        <button onClick={()=>{setGimmickCount(gimmickCount + 1)}} >+</button>
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
