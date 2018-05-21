import React, { Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function(props) {
  // const id = 1
  return (
    <Fragment>
      <ListItem button>
        <i className="material-icons">home</i>
        <ListItemText primary="Home" />
      </ListItem>
    </Fragment>
  )
}
