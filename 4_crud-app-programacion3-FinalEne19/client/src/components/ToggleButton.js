import React, {Component} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import LeftMenu from './LeftMenu';


class ToggleButton extends Component {


    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true };
      }

      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }



    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Colapsar Menú</Button>
               <Collapse isOpen={this.state.collapse}>
               <LeftMenu/>

                        </Collapse>
            </div>
        )
    };
}

export default ToggleButton;