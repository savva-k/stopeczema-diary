import React, { Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem'
import SvgIcon from '@material-ui/core/SvgIcon'
import ListItemText from '@material-ui/core/ListItemText'

export default function(props) {
  // const id = 1
  return (
    <Fragment>
      {/*Home*/}
      <ListItem button>
        <SvgIcon>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Fragment>
  )
}
