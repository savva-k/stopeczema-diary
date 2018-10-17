import React from 'react'
import { withStyles, Paper, Grid, TextField, Button } from '@material-ui/core'

const styles = theme => ({
  loginForm: {
    padding: '3px 15px 15px 15px',
  },

  loginFormGridRow: {
    textAlign: 'center',
    width: '50%',
    marginBottom: '10px',
  },

  textField: {
    width: '100%',
  },

  button: {
    marginTop: '20px',
  },
})

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: '', password: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleSubmit() {
    // this.props.history.replace('/app')
    const { login, password } = this.state
    const payload = { email: login, password: password }

    fetch('http://localhost:8081/api/login', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      credentials: 'include'
    }).then(res => {
      if (res.status === 200) {
        this.props.history.replace('/app')
      } else {
        throw new Error('Unauthorized')
      }
    })
  }

  handleLoginChange(event) {
    this.setState({ login: event.target.value, password: this.state.password })
  }

  handlePasswordChange(event) {
    this.setState({ login: this.state.login, password: event.target.value })
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.loginForm}>
        <Grid container direction="column" alignItems="center" justify="space-between">
          <Grid item className={classes.loginFormGridRow}>
            <h1>Login</h1>
          </Grid>
          <Grid item className={classes.loginFormGridRow}>
            <TextField
              id="login"
              label="Login"
              value={this.state.login}
              onChange={this.handleLoginChange}
              className={classes.textField}
            />
          </Grid>
          <Grid item className={classes.loginFormGridRow}>
            <TextField
              id="password"
              label="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              className={classes.textField}
              type="password"
            />
          </Grid>
          <Grid item className={classes.loginFormGridRow}>
            <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Login)
