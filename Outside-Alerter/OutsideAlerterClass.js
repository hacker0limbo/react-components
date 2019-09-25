import React, { Component } from 'react'

export default class OutsideAlerterCLass extends Component {
  constructor(props) {
    super(props)
    this.selfRef = React.createRef()
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.addEventListener('click', this.handleClickOutside)
  }

  handleClickOutside = e => {
    const selfNode = this.selfRef.current
    if (selfNode && !selfNode.contains(e.target)) {
      alert('Class You clicked outside of me')
    }
  }

  render() {
    return (
      <div ref={this.selfRef}>
        {this.props.children}
      </div>
    )
  }
}