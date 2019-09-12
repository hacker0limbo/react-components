import React from 'react'
import ReactDOM from 'react-dom'
import StarRatingBasicClass from './StarRatingBasic/StarRatingBasicClass'
import StarRatingBasicHook from './StarRatingBasic/StarRatingBasicHook'

const App = props => {
  return (
    <div>
      <StarRatingBasicClass totalStars={5} />
      <StarRatingBasicHook totalStars={5} />
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

