import React, { Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function(props) {
  return (
    <Fragment>
      <ListItem button>
        <i className="material-icons">search</i>
        <ListItemText primary="Search" />
      </ListItem>
    </Fragment>
  )
}
