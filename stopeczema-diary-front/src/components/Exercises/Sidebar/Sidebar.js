import React, { Fragment } from 'react'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

import NavLink from 'react-router-dom/NavLink'

import HomeItem from './Items/Home'
import FriendsItem from './Items/Friends'
import SearchItem from './Items/Search'
import SettingsItem from './Items/Settings'
import UnicornItem from './Items/Unicorn'

class Sidebar extends React.Component {
  handleItemClick = () => {
    console.log('CLICK!!!')
  }
  render() {
    return (
      <Fragment>
        <List component="nav">
          <NavLink exact activeClassName="active" to="/">
            <HomeItem />
          </NavLink>
          <NavLink exact activeClassName="active" to="/friends">
            <FriendsItem />
          </NavLink>
          <NavLink exact activeClassName="active" to="/search">
            <SearchItem />
          </NavLink>
        </List>
        <Divider />
        <List component="nav">
          <NavLink exact activeClassName="active" to="/settings">
            <SettingsItem />
          </NavLink>
          <NavLink exact activeClassName="active" to="/unicorn">
            <UnicornItem />
          </NavLink>
        </List>
      </Fragment>
    )
  }
}

export default Sidebar
