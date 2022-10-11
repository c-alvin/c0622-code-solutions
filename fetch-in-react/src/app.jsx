import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    /* your code here */
    // fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data =>
    //   this.setState({
    //     isLoading: false,
    //     users: data
    //   }));
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    this.setState({
      isLoading: false,
      users: data
    });
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
