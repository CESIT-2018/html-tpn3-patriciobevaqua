import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';



class LeftMenu extends Component {



    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }



    render() {
        return (
            <div>

            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} >

            <nav  className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">

                   
                        <Nav >
                            <ul className="nav flex-column">

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/'}>
                                        Inicio
                            </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/todos'}>
                                        Todos
                            </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/productos'}>
                                        Productos
                            </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/#'}>
                                        Servicios
                            </NavLink>
                                </li>
                                <li className="nav-item" >
                                    <NavLink exact={true} className="nav-link"  to={'/#'}>
                                        Esto es un Entity
                            </NavLink>
                                </li>

                            </ul>
                        </Nav>
                </div>
            </nav>
            </Collapse>
            </div>

        )
    }
}

export default LeftMenu;