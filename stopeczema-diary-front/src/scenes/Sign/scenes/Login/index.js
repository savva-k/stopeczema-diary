import React from 'react'
import Zoom from '@material-ui/core/Zoom'
import { withStyles, Paper, Grid, TextField, Button, Typography } from '@material-ui/core'
import Link from 'react-router-dom/Link'

const styles = theme => ({
  loginFormContainer: {
    padding: '3px 15px 15px 15px',
  },

  loginForm: {
    textAlign: 'center',
    width: '50%',
    marginBottom: '10px',
  },

  textField: {
    width: '100%',
  },

  actionButton: {
    marginTop: '10px',
  },

  error: {
    marginTop: '10px',
    color: 'salmon',
  },
})

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: '', password: '', error: false }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

    handleSubmit(event) {
    event.preventDefault()
    const { login, password } = this.state
    const payload = { email: login, password: password }

    fetch('http://localhost:8081/api/login', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      credentials: 'include',
    })
      .then(res => {
        if (res.status === 200) {
          this.props.history.replace('/app')
        } else {
          throw new Error('Unauthorized')
        }
      })
      .catch(e => this.setState({ login: this.state.login, password: '', error: true }))
  }

  handleLoginChange(event) {
    this.setState({ login: event.target.value, password: this.state.password, error: false })
  }

  handlePasswordChange(event) {
    this.setState({ login: this.state.login, password: event.target.value, error: false })
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.loginFormContainer}>
        <Grid container direction="column" alignItems="center" justify="space-between">
          <form className={classes.loginForm}>
            <Grid item>
              <h1>Sign in</h1>
            </Grid>
            <Grid item>
              <TextField
                id="login"
                label="Email"
                value={this.state.login}
                onChange={this.handleLoginChange}
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
                id="password"
                label="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                className={classes.textField}
                type="password"
              />
            </Grid>
            <Grid item>
              <Zoom in={this.state.error}>
                <Typography className={classes.error}>Invalid credentials. Please try again.</Typography>
              </Zoom>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.actionButton}
                onClick={this.handleSubmit}
              >
                Submit
              </Button>

              <Link to="/auth/sign-up">
                <Button variant="text" className={classes.actionButton}>
                  Sign up
                </Button>
              </Link>
            </Grid>
          </form>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Login)
