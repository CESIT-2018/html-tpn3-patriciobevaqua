import React, { Component } from 'react';
//import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import { Badge, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
//import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.png'

/*const propTypes = {
  children: PropTypes.node,
};*/

//const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />


        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Github Trabajos</NavLink>
          </NavItem>
          </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="" />
            </DropdownToggle>
          
          </AppHeaderDropdown>
        </Nav>
        
      </React.Fragment>
    );
  }
}

//DefaultHeader.propTypes = propTypes;
//DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
