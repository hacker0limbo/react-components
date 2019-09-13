import React, { Component } from 'react'

import './styles.css'

export default class AutoCompleteBase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestions: [],
      inputValue: ''
    }
  }

  handleInputChange = e => {
    const { suggestionsSource, suggestionsCount } = this.props
    const value = e.target.value
    let newSuggestions = []
    if (value.length > 0) {
      //  使用正则进行匹配
      const regex = new RegExp(`^${value}`, 'i')
      if (suggestionsCount === null) {
        newSuggestions = suggestionsSource.sort().filter(v => regex.test(v))  
      } else {
        newSuggestions = suggestionsSource.sort().filter(v => regex.test(v)).slice(0, suggestionsCount)  
      }
    }

    // 箭头函数如果返回对象需要加括号
    this.setState(prevState => ({
      inputValue: value,
      suggestions: newSuggestions
    }))
  }

  selectSuggestion = selectedSuggestion => {
    this.setState(prevState => ({
      inputValue: selectedSuggestion,
      suggestions: []
    }))
  }

  renderSuggestions = () => {
    const { suggestions } = this.state
    if (suggestions.length === 0) {
      return null
    }
    return (
      <ul>
        {suggestions.map((suggestion, i) => (
          <li key={i} onClick={() => this.selectSuggestion(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const { inputValue } = this.state
    return (
      <div className="AutoCompleteBase">
        <input 
          value={inputValue} 
          onChange={e => this.handleInputChange(e)} 
          type="text" 
        />
        <ul>
          {this.renderSuggestions()}
        </ul>
      </div>
    )
  }
}