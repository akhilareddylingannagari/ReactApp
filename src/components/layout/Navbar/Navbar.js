import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  Navbar,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from 'shards-react';

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  removeLocalstorage = () => {
    localStorage.removeItem('user_id');
  };
  render() {
    return (
      <Nav navbar className='flex-row'>
        <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
          <DropdownToggle caret tag={NavLink} className='text-nowrap px-3'>
            <img
              className='user-avatar rounded-circle mr-2'
              src={require('../../../assets/images/user.png')}
              alt='User Avatar'
              width={50}
              height={40}
            />{' '}
            <span className='d-none d-md-inline-block'>Akhila</span>
          </DropdownToggle>
          <Collapse tag={DropdownMenu} right small open={this.state.visible}>
            <DropdownItem tag={Link} to='user-profile'>
              <i className='material-icons'>&#xE7FD;</i> Profile
            </DropdownItem>
            <DropdownItem tag={Link} to='edit-user-profile'>
              <i className='material-icons'>&#xE8B8;</i> Edit Profile
            </DropdownItem>
            <DropdownItem tag={Link} to='file-manager-list'>
              <i className='material-icons'>&#xE2C7;</i> Files
            </DropdownItem>
            <DropdownItem tag={Link} to='transaction-history'>
              <i className='material-icons'>&#xE896;</i> Transactions
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem
              tag={Link}
              to='/login'
              className='text-danger'
              onClick={this.removeLocalstorage}>
              <i className='material-icons text-danger'>&#xE879;</i> Logout
            </DropdownItem>
          </Collapse>
        </NavItem>
      </Nav>
    );
  }
}
