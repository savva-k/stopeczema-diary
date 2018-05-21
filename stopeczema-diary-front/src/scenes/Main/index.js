import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Custom components
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Home, Friends, Search, Settings, Unicorn, Error404 } from './scenes'

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
    backgroundColor: '#2196F3',
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

function UserPage(props) {
  const { classes } = props
  return (
    <Router>
      <div className={classes.root}>
        <Header classes={classes} />
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
            <Route exact path="*" component={Error404} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UserPage)
