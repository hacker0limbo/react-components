import React, { useEffect, useRef } from 'react'

const OutsideAlerter = props => {
  const selfRef = useRef()

  const handleClickOutside = e => {
    const selfNode = selfRef.current
    if (selfNode && !selfNode.contains(e.target)) {
      alert('Hook You clicked outside of me')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return (
    <div ref={selfRef}>
      {props.children}
    </div>
  )
}

export default OutsideAlerter