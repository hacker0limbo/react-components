import React, { Component } from 'react'

export default class Draggable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDragging: false,
      // 初始位置
      originalX: 0,
      originalY: 0,
      // 移动时的位置
      translateX: 0,
      translateY: 0,
      // 结束时的位置
      lastTranslateX: 0,
      lastTranslateY: 0,
    }
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = e => {
    const { clientX, clientY } = e
    // 一旦点击了那个物体, 增加监听事件
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    if (this.props.onDragStart) {
      this.props.onDragStart()
    }

    this.setState({
      originalX: clientX,
      originalY: clientY,
      isDragging: true
    })
  }

  handleMouseMove = e => {
    const { isDragging } = this.state
    const { clientX, clientY } = e

    if (!isDragging) {
      return
    }
    // 在拖动的过程中, 同时出发 onDrag 事件, 传递坐标让使用者可以调用
    this.setState(prevState => ({
      translateX: clientX - prevState.originalX + prevState.lastTranslateX,
      translateY: e.clientY - prevState.originalY + prevState.lastTranslateY
    }), () => {
      if (this.props.onDrag) {
        this.props.onDrag({
          translateX: this.state.translateX,
          translateY: this.state.translateY
        })
      }
    })
  }

  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.setState({
      originalX: 0,
      originalY: 0,
      lastTranslateX: this.state.translateX,
      lastTranslateY: this.state.translateY,

      isDragging: false
    }, () => {
      if (this.props.onDragEnd) {
        this.props.onDragEnd()
      }
    })
  }

  render() {
    const { translateX, translateY, isDragging } = this.state
    const style = {
      transform: `translate(${translateX}px, ${translateY}px)`,
      cursor: 'grab'
    }
    if (isDragging) {
      style.cursor = 'grabbing'
      style.opacity = '0.5'
    }

    return (
      <div style={style} onMouseDown={this.handleMouseDown}>
        {this.props.children}
      </div>
    )
  }
}