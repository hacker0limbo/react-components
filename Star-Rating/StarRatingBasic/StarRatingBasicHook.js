import React, { useState } from 'react'
import Star from './Star'

const StarRatingBasicHook = props => {
  const { totalStars } = props
  const [selectedStars, setSelectedStars] = useState(0)
  
  const handleStarSelect = selectedStars => {
    setSelectedStars(selectedStars)
  }

  return (
    <div>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          index={i}
          selected={i < selectedStars}
          handleStarSelect={handleStarSelect}
        />
      ))}
    </div>
  )
}

export default StarRatingBasicHook