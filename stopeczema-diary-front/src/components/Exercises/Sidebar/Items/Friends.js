import React, { Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem'
import SvgIcon from '@material-ui/core/SvgIcon'
import ListItemText from '@material-ui/core/ListItemText'

export default function(props) {
  return (
    <Fragment>
      {/*Friends*/}
      <ListItem button>
        <SvgIcon>
          <path d="M 16 11 c 1.66 0 2.99 -1.34 2.99 -3 S 17.66 5 16 5 c -1.66 0 -3 1.34 -3 3 s 1.34 3 3 3 Z m -8 0 c 1.66 0 2.99 -1.34 2.99 -3 S 9.66 5 8 5 C 6.34 5 5 6.34 5 8 s 1.34 3 3 3 Z m 0 2 c -2.33 0 -7 1.17 -7 3.5 V 19 h 14 v -2.5 c 0 -2.33 -4.67 -3.5 -7 -3.5 Z m 8 0 c -0.29 0 -0.62 0.02 -0.97 0.05 c 1.16 0.84 1.97 1.97 1.97 3.45 V 19 h 6 v -2.5 c 0 -2.33 -4.67 -3.5 -7 -3.5 Z" />
        </SvgIcon>
        <ListItemText primary="Friends" />
      </ListItem>
    </Fragment>
  )
}
