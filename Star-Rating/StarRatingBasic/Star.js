import React from 'react'

import './styles.css'

const Star = props => {
  const { selected=false, handleStarSelect, index } = props
  return (
    <div 
      className={selected ? 'star selected' : 'star'}
      onClick={() => handleStarSelect(index+1)}
    >
  </div>
  )
}

export default Star