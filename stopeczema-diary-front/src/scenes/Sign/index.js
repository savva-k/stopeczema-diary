import React from 'react'
import { Route } from 'react-router-dom'
import { Login, Registration, ForgottenPassword } from './scenes'
import Header from './components/Header'
import { withStyles, Grid } from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: '100vh',
  },
  appBar: {
    backgroundColor: '#2196F3',
  },
  content: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
})

class Sign extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header classes={classes} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container justify="center">
            <Grid item xs={6} lg={6}>
              <Route exact path="/auth" component={Login} />
              <Route exact path="/auth/forgot-password" component={ForgottenPassword} />
              <Route exact path="/auth/sign-up" component={Registration} />
            </Grid>
          </Grid>
        </main>
      </div>
    )
  }
}

export default withStyles(styles)(Sign)
