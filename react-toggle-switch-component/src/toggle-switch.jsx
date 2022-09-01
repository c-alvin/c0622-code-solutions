import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switchOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      switchOn: !prevState.switchOn
    }));
  }

  render() {
    if (this.state.switchOn) {
      return <div onClick={this.handleClick} className="switch-on">
        <div className="circle"></div><span>ON</span>
      </div>;
    } else {
      return <div onClick= {this.handleClick} className="switch-off">
        <div className="circle-off"></div><span>OFF</span>
    </div>;
    }
  }
}
