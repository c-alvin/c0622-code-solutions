import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickFace = this.handleClickFace.bind(this);
  }

  handleClick() {
    if (this.state.isClicked) {
      clearInterval(this.intervalId);
      this.setState({
        isClicked: false
      });
    } else {
      this.intervalId = setInterval(() => {
        this.setState(prevState => ({
          timer: prevState.timer + 1,
          isClicked: true
        }));
      }, 1000);
    }
  }

  handleClickFace() {
    if (this.state.isClicked === false) {
      this.setState({
        timer: 0
      });
    }
  }

  render() {
    const iconClass = this.state.isClicked
      ? 'fa-pause'
      : 'fa-play';
    return (
    <div>
      <div className="circle" onClick={this.handleClickFace}>
        <div>
          {this.state.timer}
        </div>
      </div>
      <div className='text-center width-circle'>
            <i onClick={this.handleClick} className={`fa-solid button ${iconClass}`}></i>
      </div>
    </div>
    );
  }
}
