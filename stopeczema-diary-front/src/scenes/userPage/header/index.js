import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function(props) {
  return (
    <AppBar position="absolute" className={props.classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          StopEczema-diary
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
