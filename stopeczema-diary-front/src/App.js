import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
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
    super(props)
    this.state = { user: null }
  }

  componentDidMount() {
    fetch('http://localhost:8081/api/users/current', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        this.setState(data)
        this.props.history.push(data.user ? '/app' : '/auth')
      })
      .catch(e => {
        this.setState({ user: null })
        this.props.history.push('/auth')
      })
  }

  render() {
    return (
      <div className="container" style={styles.container}>
        <Route path="/app" component={UserPage} />
        <Route path="/auth" component={LoginPage} />
      </div>
    )
  }
}

export default withRouter(App)
