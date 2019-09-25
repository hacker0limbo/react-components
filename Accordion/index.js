import React from 'react'
import ReactDOM from 'react-dom'
import Accordion from './Accordion'

import './styles.css'

const App = () => {
  return (
    <div>
      <Accordion title="A">
        aaaaaa
      </Accordion>
      <Accordion title="B">
        bbbbbb
      </Accordion>
      <Accordion title="C">
        cccccc
      </Accordion>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
