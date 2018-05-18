import React, { Component } from 'react'
import Header from './components/Layouts/Header'

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
          <Header />
        </div>
      </div>
    )
  }
}

export default App
