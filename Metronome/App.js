import React from 'react'
import ReactDOM from 'react-dom'
import MetronomeHook from './MetronomeHook'
import MetronomeClass from './MetronomeClass'

const App = () => {
  return (
    <div>
      <p>Metronome Class</p>
      <MetronomeClass />
      <p>Metronome Hook</p>
      <MetronomeHook />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))