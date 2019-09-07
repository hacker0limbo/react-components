import React, { useState, useEffect } from 'react'

const ReadingProgressBar = props => {
  const { target } = props
  const [barWidth, setBarWidth] = useState(0)
  const barStyle = {
    position: 'sticky',
    height: '5px',
    top: 0,
    backgroundColor: '#ff0000',
    width: barWidth + '%'
  }

  const scrollListener = () => {
    if (!target.current) {
      return
    }
    const element = target.current
    const totalHeight = element.clientHeight - element.offsetTop - window.innerHeight
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    if (windowScrollTop === 0) {
      return setBarWidth(0)
    }

    if (windowScrollTop > totalHeight) {
      return setBarWidth(100)
    }

    setBarWidth((windowScrollTop/totalHeight*100))
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  })

  return (
    <div style={barStyle} />
  )
}

export default ReadingProgressBar