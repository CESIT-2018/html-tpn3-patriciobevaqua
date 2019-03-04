import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import LeftMenu from './LeftMenu';



class Toggle extends Component {



    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }


    render() {
        return (


            <div>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '' }}>Toggle</Button>
            <Collapse isOpen={this.state.collapse}>
            
            
            
            
            
            
            </Collapse>
          </div>




        )
    }
}

export default Toggle;


// <LeftMenu />