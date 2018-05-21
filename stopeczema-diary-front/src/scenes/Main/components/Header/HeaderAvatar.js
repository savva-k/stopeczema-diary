import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import classNames from 'classnames'
import { Manager, Target, Popper } from 'react-popper'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
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
})

class HeaderAvatar extends React.Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open })
  }

  handleClose = event => {
    if (this.target1.contains(event.target)) {
      return
    }

    this.setState({ open: false })
  }
  render() {
    const { classes } = this.props
    const { open } = this.state
    return (
      <Manager style={{ position: 'absolute', right: 4, top: 4 }}>
        <Target>
          <div
            ref={node => {
              this.target1 = node
            }}
          >
            <Button
              variant="flat"
              aria-owns={open ? 'menu-list-grow' : null}
              aria-haspopup="true"
              onClick={this.handleToggle}
            >
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
          </div>
        </Target>
        <Popper
          placement="bottom-start"
          eventsEnabled={open}
          className={classNames({ [classes.popperClose]: !open })}
        >
          <ClickAwayListener onClickAway={this.handleClose}>
            <Grow
              in={open}
              id="menu-list-grow"
              style={{ transformOrigin: '0 0 0' }}
            >
              <Paper>
                <MenuList role="menu">
                  <MenuItem onClick={this.handleClose}>
                    Profile settings
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </MenuList>
              </Paper>
            </Grow>
          </ClickAwayListener>
        </Popper>
      </Manager>
    )
  }
}
export default withStyles(styles)(HeaderAvatar)
