
import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';


class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth; 
        const authLinks = (
            < ul className = " navbar-nav ml-auto " >
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={this.onLogout.bind(this)} >
                    <img src={user.avatar} alt={user.name} title={user.name}   //avatar
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                            Salir
                </a>
                </li>
                </ul>
        )
      const guestLinks = (

        <Nav pills>
        <NavItem >
            <NavLink exact={true} href="/login" className="btn btn-primary mr-2">Ingresar</NavLink>
            
        </NavItem>
        <NavItem>
            <NavLink exact={true} href="/register" className="btn btn-primary  mr-2">Registrarse</NavLink>

        </NavItem>

         <NavItem>
            <NavLink href="/" className="btn btn-danger  mr-2">Salir</NavLink>
        </NavItem>
        </Nav>        
            
      )


        return(
            <div className="bg-info clearfix" >
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Aplicación</a>  
                
                <div className="" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
            
            </div>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));


//línea 24 le saqué en onClick porque agregaba la palabra login al href
//<a href="/" className="nav-link" onClick={this.onLogout.bind(this)}>
//saqué el styl de la fila 54       <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
