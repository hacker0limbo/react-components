import React, { Component } from 'react'
import Star from './Star'

export default class StarRatingBasicClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStars: 0
    }
  }

  handleStarSelect = selectedStars => {
    this.setState({
      selectedStars,
    })
  }

  render() {
    const { totalStars } = this.props
    const { selectedStars } = this.state

    // 判断一个 star 如何被选中
    // 每一个 star 都可以点击, 且有对应的 index
    // 父组件传递一个回调函数, 可以设置选中的 star 的数量(totalStars), 当一个子组件被点击时调用该函数设置 totalStars, 注意 index 从 0 开始
    return (
      <div>
        {[...Array(totalStars)].map((_, i) => (
          <Star
            key={i}
            index={i}
            selected={i < selectedStars}
            handleStarSelect={this.handleStarSelect}
          />
        ))}
      </div>
    )
  }
}