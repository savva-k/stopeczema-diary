import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { Popper } from '@material-ui/core'
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state/index'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  popperClose: {
    pointerEvents: 'none',
  },
  popper: {
    /* this was so dirty... */
    zIndex: 9989,
  },
  headerMenuButton: {
    position: 'absolute',
    top: '4px',
    right: '4px',
  },
})

class HeaderAvatar extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <PopupState variant="popover" popupId="headerMenu">
        {popupState => (
          <React.Fragment>
            <Button variant="flat" className={classes.headerMenuButton} {...bindToggle(popupState)}>
              <Typography
                variant="subheading"
                style={{
                  color: '#fff',
                  paddingRight: 12,
                  textTransform: 'capitalize',
                }}
                color="primary"
                noWrap
              >
                Gorlum666
              </Typography>
              <Avatar alt="avatar" src="/static/images/gorl.jpg" />
            </Button>
            <Popper className={classes.popper} {...bindPopper(popupState)}>
              <Paper>
                <MenuList role="menu">
                  <MenuItem>Profile settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Paper>
            </Popper>
          </React.Fragment>
        )}
      </PopupState>
    )
  }
}
export default withStyles(styles)(HeaderAvatar)
