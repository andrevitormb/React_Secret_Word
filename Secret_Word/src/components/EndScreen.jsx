import '../styles/components/endscreen.sass'

const EndScreen = ({retry}) => {
  return (
    <div id='EndScreen'>
        <h1>End Game</h1>
        <p>Score!</p>
        <button onClick={retry}>Retry!</button>
    </div>
  )
}

export default EndScreen