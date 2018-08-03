import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Custom components
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Home, Friends, Search, Settings, Unicorn, Error404 } from './scenes'

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#2196F3',
  },
  drawerPaper: {
    position: 'relative',
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

function UserPage(props) {
  const { classes } = props
  return (
    <Router>
      <div className={classes.root}>
        <Grid container alignItems="stretch">
          <Grid item xs={12} lg={12}>
            <Header classes={classes}/>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} lg={3}>
              <Drawer
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.toolbar} />
                <Sidebar />
              </Drawer>
            </Grid>
          </Hidden>
          <Grid item xs={12} lg={9}>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/friends" component={Friends} />
                <Route path="/settings" component={Settings} />
                <Route path="/search" component={Search} />
                <Route path="/unicorn" component={Unicorn} />
                <Route exact path="*" component={Error404} />
              </Switch>
            </main>
          </Grid>
        </Grid>
      </div>
    </Router>
  )
}

UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(
  withStyles(styles),
  withWidth(),
)(UserPage)
