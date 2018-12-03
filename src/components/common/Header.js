import PropTypes from 'prop-types';
import React from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';

// Not found page component
export default class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Nav>
            <LinkContainer to={{
              pathname: '/home'
            }}>
              <NavItem>
                <FontAwesome name="cogs"/> Home
              </NavItem>
            </LinkContainer>
              <LinkContainer to={{
                pathname: '/admin'
              }}>
                <NavItem>
                  <FontAwesome name="cogs"/> Admin
                </NavItem>
              </LinkContainer>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

Header.contextTypes = {
  t: PropTypes.func.isRequired,
};
