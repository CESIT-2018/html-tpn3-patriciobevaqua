import React, {Component} from 'react';
import ToggleButton from '../ToggleButton';  // boton para colapsar leftmenu
import { Container, Row, Col } from 'reactstrap';
import foto4x4 from './foto4x4.jpg';
import '../dashboard.css';    // foto alumno
import logo from '../logo.svg';   // logo react


class Welcomes extends Component {
    render() {
        return (
            <div>

                <Container>
                    <Row className="">

                            <Col className=""> 

                                <h2>Final Programación III Enero 2019</h2>

                                <ToggleButton/>  
                            </Col>
                    
                    

                    </Row>
                    
                    <Row className="">
                            <Col className="Centrar">
                            
                            
                            
                                <img src={logo} className="App-logo" alt="logo" />
                            </Col>
                    </Row>

                    <Row className="">
                            <Col className="Centrar">

                                <p> </p> 

                                <img src={foto4x4} className="App-logo"/>                      
                            </Col>
                    </Row>
                
                </Container>

            </div>
            
    )
    };
}

export default Welcomes;












//                        <Row className="Centrar">

/* 
             <div className="App">
                   <div className="App-header">
                       <img src={logo} className="App-logo" alt="logo" />
                   </div>
                </div>*/
                   
/*                <div className="App">
                   <div className="App-header">
                    <img src={foto4x4} className="App-logo"/>                      
                   </div>
                </div>  
                
*/ 
