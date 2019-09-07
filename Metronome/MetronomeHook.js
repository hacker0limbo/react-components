import React, { useState, useEffect, useRef, useCallback } from 'react'
import './Metronome.css'


const MetronomeHook = props => {
  const [playing, setPlaying] = useState(false)
  const [count, setCount] = useState(0)
  const [bpm, setBpm] = useState(100)
  const timer = useRef()
  const beatsPerMeasure = 4
  const click1 = new Audio('https://daveceddia.com/freebies/react-metronome/click1.wav')
  const click2 = new Audio('https://daveceddia.com/freebies/react-metronome/click2.wav')

  // 可以是所有 useCallback 包装一下 playClick
  const playClickCallback = useCallback(() => {
    if (count % beatsPerMeasure === 0) {
      click2.play()
    } else {
      click1.play()
    }
    setCount(prevCount => (prevCount + 1) % beatsPerMeasure)
  }, [count, click1, click2])

  useEffect(() => {
    if (playing) {  
      clearInterval(timer.current)
      timer.current = setInterval(playClickCallback, (60/bpm)*1000)
    } else {
      clearInterval(timer.current)
    }
  }, [bpm, playing, playClickCallback])  

/*
  // 如果不使用 useCallback, 由于 playClick 依赖了 count 这个组件, 因此在 useEffect 需要显示声明 count 还有 click1 和 click 2

  const playClick = () => {
    if (count % beatsPerMeasure === 0) {
      click2.play()
    } else {
      click1.play()
    }
    setCount(prevCount => (prevCount + 1) % beatsPerMeasure)
  }

  useEffect(() => {
    if (playing) {  
      clearInterval(timer.current)
      timer.current = setInterval(playClick, (60/bpm)*1000)
    } else {
      clearInterval(timer.current)
    }
  }, [bpm, playing, playClick, count, click1, click2])  

*/
  const startStop = () => {
    if (playing) {
      setPlaying(false)
    } else {
      setCount(0)
      setPlaying(true)
    }
  }

  const handleBpmChange = e => {
    setBpm(e.target.value)

    if (playing) {
      setCount(0)
    }
  }

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input
          type="range"
          min="60"
          max="240"
          value={bpm}
          onChange={handleBpmChange} />
      </div>
      <button onClick={startStop}>
        {playing ? 'Stop' : 'Start'}
      </button>
    </div>
  )

}

export default MetronomeHook