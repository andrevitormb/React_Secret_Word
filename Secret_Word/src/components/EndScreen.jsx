import '../styles/components/endscreen.sass'

const EndScreen = ({retry,score}) => {
  return (
    <div id='EndScreen'>
        <h1>End Game</h1>
        <h2>Your Score is</h2>
        <p>{score}</p>
        <button onClick={retry}>Retry!</button>
    </div>
  )
}

export default EndScreen