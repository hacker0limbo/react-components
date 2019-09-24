import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = props => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div>
      <p 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Hover me
      </p>
      {isHovering ? <p>You are hovering me!</p> : null}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
