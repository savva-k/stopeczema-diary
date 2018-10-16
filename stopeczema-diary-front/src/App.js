import React, { Component } from 'react'
import UserPage from './scenes/Main/'
import LoginPage from './scenes/Sign/'

const styles = {
  container: {
    margin: '0 auto',
    height: '100%',
  },
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }

  componentDidMount() {
    fetch('http://localhost:8081/api/users/check')
    .then(res => res.json())
    .then(data => this.setState(data));
  }

  render() {
    const { loggedIn } = this.state;
    
    return (
      <div className="container" style={styles.container}>
        { loggedIn ? <UserPage /> : <LoginPage /> }
      </div>
    )
  }
}

export default App
