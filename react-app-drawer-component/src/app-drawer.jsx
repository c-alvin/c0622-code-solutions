import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawerOn: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickBackground = this.handleClickBackground.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      drawerOn: !prevState.drawerOn
    }));
  }

  handleClickBackground() {
    this.setState({
      drawerOn: false
    });
  }

  render() {
    const show = this.state.drawerOn
      ? 'show'
      : 'none';
    const stretch = this.state.drawerOn
      ? 'stretch'
      : 'none';
    return (
      <div>
        <div>
          <i onClick={this.handleClick} className="fa-sharp fa-solid fa-bars bars"></i>
        </div>
        <div onClick={this.handleClickBackground} className={`drawer-background ${stretch}`}></div>
          <div className={`drawer ${show}`}>
            <h1 onClick={this.handleClick}>Menu</h1>
            <h2 onClick={this.handleClick}>About</h2>
            <h2 onClick={this.handleClick}>Get Started</h2>
            <h2 onClick={this.handleClick}>Sign In</h2>
          </div>
      </div>
    );
  }
}
