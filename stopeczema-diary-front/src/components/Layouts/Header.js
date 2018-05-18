import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Sidebar from '../Exercises/Sidebar/Sidebar'

import Home from './mainContent/Home'
import Friends from './mainContent/Friends'
import Search from './mainContent/Search'
import Settings from './mainContent/Settings'
import Unicorn from './mainContent/Unicorn'

const ReactRouter = require('react-router-dom')
const Router = ReactRouter.BrowserRouter
const Route = ReactRouter.Route
const Switch = ReactRouter.Switch

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
})

function ClippedDrawer(props) {
  const { classes } = props
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              StopEczema-diary
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <Sidebar />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/friends" component={Friends} />
            <Route path="/settings" component={Settings} />
            <Route path="/search" component={Search} />
            <Route path="/unicorn" component={Unicorn} />
            <Route
              render={function() {
                return <p>Not Found</p>
              }}
            />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ClippedDrawer)
