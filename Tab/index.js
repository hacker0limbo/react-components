import React from 'react'
import ReactDOM from 'react-dom'
import Tabs from './Tabs'

import './styles.css'

const App = () => {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="TabA">
          A
        </div>
        <div label="TabB">
          B
        </div>
        <div label="TabC">
          C
        </div>
      </Tabs>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
