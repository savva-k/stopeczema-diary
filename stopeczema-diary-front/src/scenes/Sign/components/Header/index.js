import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

class Header extends React.Component {
  render() {
    return (
      <AppBar position="absolute" className={this.props.classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            StopEczema-diary
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
