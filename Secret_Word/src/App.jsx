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

  console.log(word)
  return (
    <div className="App">
     {GameStage === "start" && <StartScreen/>}
     {GameStage === "game" && <GameScreen/>}
     {GameStage === "end" && <EndScreen/>} 
    </div>
  )
}

export default App
