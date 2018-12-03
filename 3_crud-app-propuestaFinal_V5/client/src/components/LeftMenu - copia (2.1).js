import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText,NavLink } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faHome,faListAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faKey, faHome,faListAlt);


class LeftMenu extends Component {


    render() {
        return (

            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                   
                }}
            >

                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="">

                    <NavItem eventKey="home" exact={true} to={'/'}>
                   
                        <NavIcon>
                            <FontAwesomeIcon
                                icon="home"
                            />
                        </NavIcon>
                        <NavText>
                            Home
            </NavText>
                    </NavItem>
                    <NavItem eventKey="todos">
                        <NavIcon>
                        <FontAwesomeIcon
                                icon="list-alt"
                            />
                        </NavIcon>
                        <NavText >
                            Todos
            </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText >
                                Line Chart
                </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>





        )
    }
}

export default LeftMenu;