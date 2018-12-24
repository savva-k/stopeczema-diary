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

class UserRegistration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      matchingPassword: '',
      email: '',
      errorMessage: '',
      error: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const { errorMessage, error, ...payload } = this.state

    fetch('http://localhost:8081/api/users', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      credentials: 'include',
    }).then(res => {
      if (res.status === 201) {
        this.props.history.replace('/auth')
      } else {
        this.setState(state => {
          return { ...state, error: true, errorMessage: 'An error occurred during the registration' }
        })
      }
    })
  }

  handleChange(event) {
    this.setState({ ...this.state, [event.target.id]: event.target.value })
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.loginFormContainer}>
        <Grid container direction="column" alignItems="center" justify="space-between">
          <form className={classes.loginForm}>
            <Grid item>
              <h1>Creating a new account</h1>
            </Grid>
            <Grid item>
              <TextField
                id="firstName"
                label="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
                id="lastName"
                label="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
                id="username"
                label="Login"
                value={this.state.username}
                onChange={this.handleChange}
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
                id="email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange}
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
                id="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange}
                className={classes.textField}
                type="password"
              />
            </Grid>
            <Grid item>
              <TextField
                id="matchingPassword"
                label="Confirm the password"
                value={this.state.matchingPassword}
                onChange={this.handleChange}
                className={classes.textField}
                type="password"
              />
            </Grid>
            <Grid item>
              <Zoom in={this.state.error}>
                <Typography className={classes.error}>{this.state.errorMessage}</Typography>
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
                Create account
              </Button>

              <Link to="/auth">
                <Button variant="text" className={classes.actionButton}>
                  Back to Login
                </Button>
              </Link>
            </Grid>
          </form>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(UserRegistration)
