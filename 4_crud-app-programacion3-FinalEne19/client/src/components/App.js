import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './dashboard.css'
import Header from './Header';
import LeftMenu from './LeftMenu';
import MainContainer from './MainContainer';
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Container>

                        <Header/>

                        <Row>
                            <Col>  <MainContainer/>  </Col>
                        </Row>


                    </Container>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;