import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function(props) {
  return (
    <ListItem button>
      <i className="material-icons">settings</i>
      <ListItemText primary="Settings" />
    </ListItem>
  )
}
