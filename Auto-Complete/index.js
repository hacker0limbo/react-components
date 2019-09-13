import React from 'react'
import ReactDOM from 'react-dom'
import suggestionsSource from './suggestionsSource'
import AutoCompleteBase from './AutoCompleteBase'

import './App.css'

const App = props => {
  return (
    <div className="App">
      <div className="App-AutoCompleteBase">
        <AutoCompleteBase 
          suggestionsSource={suggestionsSource} 
          suggestionsCount={5}
        />
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
