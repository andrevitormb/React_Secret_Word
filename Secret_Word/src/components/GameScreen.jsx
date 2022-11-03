import '../styles/components/gamescreen.sass'

const GameScreen = ({verifyLetter}) => {
  return (
    <div id='GameScreen'>
        <p className='points'>
          <span>Points: 000</span>
        </p>
        <h1>Guess the Word</h1>
        <h3 className='tip'>
          Tip about the word: <span> Tip...</span>
        </h3>
        <p>You have X attempts</p>
        <div className='wordContainer'>
          <span className='letter'>A</span>
          <span className='letter'>B</span>
          <span className='blankSquare'></span>
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
          <span>a,</span>
          <span>b,</span>
        </div>
        {/* <button onClick={verifyLetter}>Start Game</button> */}
    </div>
  )
}

export default GameScreen