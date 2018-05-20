import React, { Component } from 'react'
import UserPage from './scenes/userPage/'
import LoginPage from './scenes/loginPage'

let isLogin = true

const styles = {
  container: {
    width: 1280,
    margin: '0 auto',
  },
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" style={styles.container}>
          {isLogin ? <UserPage /> : <LoginPage />}
        </div>
      </div>
    )
  }
}

export default App
