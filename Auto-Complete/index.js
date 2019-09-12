import React from 'react'
import ReactDOM from 'react-dom'
import suggestionsSource from './suggestionsSource'
import AutoComplete from './AutoComplete'
import './styles.css'

const App = props => {
  return (
    <div className="App">
      <div className="container">
        <AutoComplete suggestionsSource={suggestionsSource} />
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
