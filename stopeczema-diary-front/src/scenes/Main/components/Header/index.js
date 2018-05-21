import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import HeaderAvatar from './HeaderAvatar'

export default function(props) {
  return (
    <AppBar position="absolute" className={props.classes.appBar}>
      <Toolbar style={{ minHeight: 65 }}>
        <Typography variant="title" color="inherit" noWrap>
          StopEczema-diary
        </Typography>
        <HeaderAvatar />
      </Toolbar>
    </AppBar>
  )
}
