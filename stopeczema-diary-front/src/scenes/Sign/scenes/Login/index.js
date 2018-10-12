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
})

class Login extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.loginForm}>
        <Grid container direction="column" alignItems="center" justify="space-between">
          <Grid item className={classes.loginFormGridRow}>
            <h1>Login</h1>
          </Grid>
          <Grid item className={classes.loginFormGridRow}>
            <TextField id="login" label="Login" className={classes.textField} />
          </Grid>
          <Grid item className={classes.loginFormGridRow}>
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              type="password"
            />
          </Grid>
          <Grid item className={classes.loginFormGridRow}>
            <Button variant="contained" color="primary" className={classes.button}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Login)
