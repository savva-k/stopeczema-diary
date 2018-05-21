import React, { Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem'
import SvgIcon from '@material-ui/core/SvgIcon'
import ListItemText from '@material-ui/core/ListItemText'
import UnicornPath from './unicornSvgPath'
export default function(props) {
  return (
    <Fragment>
      <ListItem button>
        <SvgIcon>
          <UnicornPath />
        </SvgIcon>
        <ListItemText primary="Pet the unicorn ^_^" />
      </ListItem>
    </Fragment>
  )
}
