import React, { useState, useCallback, useEffect } from 'react'

import './styles.css'

const TypeWritter = props => {
  const { loop, speed, delay, words } = props
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  // 打字速度, 这里速度包括 打出字的速度, 删除字的速度, 和延迟的速度, 均作为每一轮 setTimeout 的 interval 参数, 默认为 100 开始打字时的速度
  const [typingSpeed, setTypingSpeed] = useState(100)

  const handleTyping = useCallback(() => {
    // 如果是 loop, 每次在 words 这个列表里面用 module 查找出一个 word
    // 否则保持和 counter 一样, 因为如果没有 loop 的话 counter 最后也会停止计数, index 正好停在最后
    const index = loop ? counter % words.length : counter
    const fullWord = words[index]

    if (isDeleting) {
      // 设置删除速度为为打字速度的两倍
      setTypingSpeed(speed/2)
      // 设置从右开始删除字母, 做法为每次截取当前(上一次单词的少一个字母)
      setText(fullWord.substring(0, text.length-1))
      // 如果此时已经全部删除完毕, 开始新的一轮
      if (text === '') {
        setIsDeleting(false)
        setCounter(counter + 1)
      }
    } else {
      setTypingSpeed(speed)
      // 设置从左往右开始打字
      setText(fullWord.substring(0, text.length+1))
      // 如果已经打出了全部字母
      if (text === fullWord) {
        if (!loop && counter >= words.length-1) {
          // 如果没有 loop, 跳出
          return
        }
        setIsDeleting(true)
        setTypingSpeed(delay)
      }
    }
  }, [counter, delay, isDeleting, loop, speed, text, words])

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping()
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [handleTyping, typingSpeed])

  return (
    <span>
      <span>{text}</span>
      <span className="blinking-cursor">|</span>
    </span>
  )
}

export default TypeWritter
