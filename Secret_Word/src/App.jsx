//Components
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import EndScreen from './components/EndScreen'
//React
import { useState, useCallback, useEffect } from 'react'
//Sass
import './styles/components/app.sass'
//Data
import {wordsList} from './components/data/words'

const stages = [
  {id:1,name: 'start'},
  {id:2,name: 'game'},
  {id:3,name: 'end'},
]

function App() {
  const [GameStage, setGameStage] = useState(stages[0].name)
  const [word] = useState(wordsList)

 //Starts the secret Word game 
 const startGame = () =>{
  setGameStage(stages[1].name)
 }

 //process the letter input
const verifyLetter = () => {
  setGameStage(stages[2].name)
}

const retry= () =>{
  setGameStage(stages[0].name)
}
  return (
    <div className="App">
     {GameStage === "start" && <StartScreen startGame = {startGame}/>}
     {GameStage === "game" && <GameScreen verifyLetter = {verifyLetter}/>}
     {GameStage === "end" && <EndScreen retry = {retry} />} 
    </div>
  )
}

export default App
