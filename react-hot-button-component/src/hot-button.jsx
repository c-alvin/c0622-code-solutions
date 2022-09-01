import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    if (this.state.clicks < 6) {
      return <button className="purple-button" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks < 9) {
      return <button className="light-purple-button"onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks < 12) {
      return <button className="red-button" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks < 15) {
      return <button className="orange-button" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks < 18) {
      return <button className="yellow-button" onClick={this.handleClick}>Hot Button</button>;
    } else {
      return <button className="white-button" onClick={this.handleClick}>Hot Button</button>;
    }
  }
}
