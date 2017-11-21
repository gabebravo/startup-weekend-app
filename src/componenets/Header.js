import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, 
  Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { link1, anchor1, link2, anchor2 } = this.props;
    return (
      <div>
        <Navbar className="header-color" light expand="md">
          <NavbarBrand tag={Link} to="/">
            <img src={logo} 
              alt="tutor at tutorfy"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to={`${link1}`}>{anchor1}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={`${link2}`}>{anchor2}</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header