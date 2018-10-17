import React, { Fragment } from 'react'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

import NavLink from 'react-router-dom/NavLink'

import {
  HomeItem,
  FriendsItem,
  SearchItem,
  SettingsItem,
  UnicornItem,
} from './components/'

class Sidebar extends React.Component {
  render() {
    return (
      <Fragment>
        <List component="nav">
          <NavLink exact activeClassName="active" to="/app">
            <HomeItem />
          </NavLink>
          <NavLink exact activeClassName="active" to="/app/friends">
            <FriendsItem />
          </NavLink>
          <NavLink exact activeClassName="active" to="/app/search">
            <SearchItem />
          </NavLink>
        </List>
        <Divider />
        <List component="nav">
          <NavLink exact activeClassName="active" to="/app/settings">
            <SettingsItem />
          </NavLink>
          <NavLink exact activeClassName="active" to="/app/unicorn">
            <UnicornItem />
          </NavLink>
        </List>
      </Fragment>
    )
  }
}

export default Sidebar
