import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import { Route, Switch } from 'react-router-dom'

// Custom components
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Home, Friends, Search, Settings, Unicorn, Error404 } from './scenes'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#2196F3',
  },
  drawer: {
    height: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    position: 'relative',
  },
  contentWrapper: {
    height: '100%',
  },
  content: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  sidebar: {
    height: '100%',
  },
  toolbar: theme.mixins.toolbar,
})

function UserPage(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Header classes={classes}/>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} md={3} className={classes.sidebar}>
            <Drawer
              variant="permanent"
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.toolbar} />
              <Sidebar />
            </Drawer>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={9} className={classes.contentWrapper}>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/app" component={Home} />
              <Route exact path="/app/friends" component={Friends} />
              <Route path="/app/settings" component={Settings} />
              <Route path="/app/search" component={Search} />
              <Route path="/app/unicorn" component={Unicorn} />
              <Route exact path="/app/*" component={Error404} />
            </Switch>
          </main>
        </Grid>
      </Grid>
    </div>
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
