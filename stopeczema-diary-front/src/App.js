import React, { Component } from 'react'
import UserPage from './scenes/Main/'
import LoginPage from './scenes/Sign/'

let isLogin = false

const styles = {
  container: {
    margin: '0 auto',
    height: '100%',
  },
}

class App extends Component {
  render() {
    return (
      <div className="container" style={styles.container}>
        {isLogin ? <UserPage /> : <LoginPage />}
      </div>
    )
  }
}

export default App
