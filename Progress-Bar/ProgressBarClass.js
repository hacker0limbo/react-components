import React, { Component } from 'react';

class ProgressBarClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      startTime: null
    };

    this.updateProgressBar = this.updateProgressBar.bind(this);
  }

  componentDidMount() {
    this.setState({startTime: Date.now()});
    requestAnimationFrame(this.updateProgressBar);
  }

  updateProgressBar() {
    const { startTime } = this.state;
    const { duration } = this.props;

    const elapsedTime = Date.now() - startTime;

    if(elapsedTime <= duration) {
      const value = elapsedTime / duration * 100;
      this.setState({value});
      requestAnimationFrame(this.updateProgressBar);
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div style={{margin: '20px 0'}}>
        <progress value={value} max={100} />
      </div>
      )
  }
}

export default ProgressBarClass;
