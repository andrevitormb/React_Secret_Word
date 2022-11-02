import '../styles/components/startscreen.sass'

const StartScreen = ({startGame}) => {
  return (
    <div id='StartScreen'>
        <h1>Secret Word</h1>
        <p>Click the Button bellow to start the game!</p>
        <button onClick={startGame}>Start Game</button>
    </div>
  )
}

export default StartScreen