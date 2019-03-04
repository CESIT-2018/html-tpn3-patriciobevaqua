import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


class Header extends Component {

    render() {
        return (
            <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Aplicación</a>              

                <Nav pills>
                <NavItem >
                    <NavLink href="/registro" className="btn btn-primary mr-2">Registrarse</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/logueo" className="btn btn-primary  mr-2">Ingresar</NavLink>
                </NavItem>

                 <NavItem>
                    <NavLink href="/" className="btn btn-danger  mr-2">Salir</NavLink>
                </NavItem>
                </Nav>
            
                
              
            </nav>
            </div>
        )
    }
}

export default Header;

// <a className="nav-link" href="/">Salir</a>

/*  <ul className="navbar-nav px-3">
<li className="nav-item text-nowrap">
<button className="btn btn-danger  float-left">Salir</button>
   
</li>
</ul>  */ 