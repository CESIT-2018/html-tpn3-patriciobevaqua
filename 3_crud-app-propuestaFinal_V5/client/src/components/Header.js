import React, { Component } from 'react';
import Toggle from './Toggle';


class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">

                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Aplicación</a>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Toggle />
                    </li>

                </ul>
            </nav>
        )
    }
}

export default Header;