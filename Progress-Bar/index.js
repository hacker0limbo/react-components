import React from 'react'
import ReactDOM from 'react-dom'
import ProgressBarHook from './ProgressBarHook'
import ProgressBarClass from './ProgressBarClass'

const App = () => {

  return (
    <div>
      <ProgressBarHook duration={5000} />
      <ProgressBarClass duration={6000} />
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
