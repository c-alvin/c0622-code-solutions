import React from 'react';

export default class Validated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const passwordLength = this.state.password.length >= 8
      ? 'fa-check'
      : 'fa-x';
    const color = this.state.password.length >= 8
      ? 'green'
      : 'red';
    return (
      <form>
        <label htmlFor="password">
        Password
        </label>
        <div>
          <input className="width border" type="password" value= {this.state.password} id="password" name="password" onChange= {this.handleChange}/>
          <i className={`fa-solid margin-left ${color} ${passwordLength}`}></i>
        </div>
      </form>
    );
  }
}
