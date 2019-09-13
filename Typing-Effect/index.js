import React from 'react'
import ReactDOM from 'react-dom'
import TypeWritter from './TypeWritter'

const App = props => {
  const appStyles = {
    textAlign: 'center',
    marginTop: '5rem'
  }

  return (
    <div style={appStyles}>
      <h1>
        I Love {" "}
        <span style={{color: 'red'}}>
          <TypeWritter 
            loop={true}
            speed={100}
            delay={1500}
            words={['React.', 'Vue.', 'Angular.']}
          />
        </span>
      </h1>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
