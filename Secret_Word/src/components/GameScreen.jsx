import '../styles/components/gamescreen.sass'

const GameScreen = ({verifyLetter}) => {
  return (
    <div id='GameScreen'>
        <h1>Game</h1>
        <button onClick={verifyLetter}>Start Game</button>
    </div>
  )
}

export default GameScreen