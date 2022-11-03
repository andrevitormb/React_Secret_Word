import '../styles/components/gamescreen.sass'

const GameScreen = ({verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters,
  guessedLetters, 
  wordLetters,
  attempts,
  score,
  wrongLetters}) => {
  return (
    <div id='GameScreen'>
        <p className='points'>
          <span>Points: {score}</span>
        </p>
        <h1>Guess the Word</h1>
        <h3 className='tip'>
          Tip about the word: <span> {pickedCategory}</span>
        </h3>
        <p>You have {attempts} attempts</p>
        <div className='wordContainer'>
          {letters.map((letter,i) => (
            guessedLetters.includes(letter) ? (
              <span key = {i} className = 'letter'>{letter}</span>
            ) : (
              <span key = {i} className = 'blankSquare'></span>
            )
          ))}
        </div>
        <div className="letterContainer">
          <p>Try guess a letter of the word </p>
          <form>
            <input type="text" name='letter' maxLength="1" required />
            <button>Play!</button>
          </form>
        </div>
        <div className="wrongLettersContainer">
          <p>Letters already used</p>
          {wrongLetters.map((wrongletter, i) => (
            <span key={i}>{wrongletter}, </span>
          ))}
        </div>
        {/* <button onClick={verifyLetter}>Start Game</button> */}
    </div>
  )
}

export default GameScreen