import React, { useState, useEffect, useCallback } from 'react'

const ProgressBarHook = props => {
  const { duration } = props
  const [value, setValue] = useState(0)
  const [startTime, setStartTime] = useState(null)

  const updateProgressBar = useCallback(() => {
    // 已经过去的时间
    const elapsedTime = Date.now() - startTime
    if (elapsedTime <= duration) {
      setValue(elapsedTime/duration*100)
      requestAnimationFrame(updateProgressBar)
    }
  }, [startTime, duration])

  useEffect(() => {
    setStartTime(Date.now())
    requestAnimationFrame(updateProgressBar)  
  }, [updateProgressBar])

  return (
    <center>
      <progress value={value} max={100} />
      <span>{Math.ceil(value)}%</span>
    </center>
  )

}

export default ProgressBarHook