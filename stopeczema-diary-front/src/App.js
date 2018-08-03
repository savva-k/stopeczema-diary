import React, { Component } from 'react'
import UserPage from './scenes/Main/'
import LoginPage from './scenes/Sign/scenes/Login'

let isLogin = true

const styles = {
  container: {
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
