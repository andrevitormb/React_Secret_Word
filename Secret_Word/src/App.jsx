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

const attemptsQty = 3

function App() {
  const [GameStage, setGameStage] = useState(stages[0].name)
  const [word] = useState(wordsList)

  const [pickedCategory, setPickedCategory] = useState("")
  const [pickedWord, setPickedWord] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [attempts, setAttempts]= useState(attemptsQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () =>{
    //picked a random category
    const categories = Object.keys(word);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
  
    console.log(category)

    //Pick a random Word 
    const words = word[category][Math.floor(Math.random()* word[category].length)]

    console.log(words)

    return {words, category}
   }


 //Starts the secret Word game 
 const startGame = () =>{
  const {words, category} = pickWordAndCategory()
  
  setGameStage(stages[1].name)

  //Create an array of Letters 
  let wordLetters = words.split("")

  wordLetters = wordLetters.map((Letter) => Letter.toLowerCase())
  console.log(wordLetters)

  //Filĺ States 
  setPickedWord(words)
  setPickedCategory(category)
  setLetters(wordLetters)
 }

 //process the letter input
const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()
// check if letter is already been utilized 
    if(
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
   ){
      return
    }

  // push guessed letter or remove a guess 
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
      ...actualGuessedLetters,
      normalizedLetter
    ])} else {
      setWrongLetters((actualWrongLetters) => [
      ...actualWrongLetters,
      normalizedLetter])

      setAttempts((actualGuesses)=> actualGuesses - 1)
    }
}

const clearLettersStats = () =>{
  setGuessedLetters([])
  setWrongLetters([])
}

useEffect(()=>{
  if (attempts <= 0){
    //restart all stats

    clearLettersStats()
    setGameStage(stages[2].name)
  }

}, [attempts])

const retry= () =>{
  setScore(0)
  setAttempts(attemptsQty)
  setGameStage(stages[0].name)
}
  return (
    <div className="App">
     {GameStage === "start" && <StartScreen startGame = {startGame}/>}
     {GameStage === "game" &&(
     <GameScreen
      verifyLetter = {verifyLetter} 
      pickedWord = {pickedWord} 
      pickedCategory = {pickedCategory} 
      letters={letters}
      guessedLetters = {guessedLetters} 
      wordLetters = {wrongLetters}
      attempts ={attempts}
      score = {score}
      wrongLetters = {wrongLetters}
      />
      )}
     {GameStage === "end" && <EndScreen retry = {retry} score={score} />} 
    </div>
  )
}

export default App
