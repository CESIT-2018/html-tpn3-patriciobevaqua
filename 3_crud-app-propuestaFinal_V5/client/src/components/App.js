import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './dashboard.css';
import './_nav.scss';



import Header from './Header';
import LeftMenu from './LeftMenu';
import MainContainer from './MainContainer';


class App extends Component {
    render() {
        return (
            <div className="">
                <BrowserRouter>
                    <div className="">
                        
                        <Header />

                        <LeftMenu />
                        <MainContainer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

