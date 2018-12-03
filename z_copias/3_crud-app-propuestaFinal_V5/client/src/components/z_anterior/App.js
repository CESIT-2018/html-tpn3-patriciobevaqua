import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Header from './Header';
import LeftMenu from './LeftMenu';
import MainContainer from './MainContainer';


class App extends Component {
    render() {
        return (
            <div>
               

                <BrowserRouter>
                    <div>
                        <Header />
                        <LeftMenu />
                        <MainContainer />
                    </div>
                </BrowserRouter>
            
                <Helmet>
                    <script src="./vendor/jquery-easing/jquery.easing.min.js"></script>
                    
                    <script src="./vendor/chart.js/Chart.min.js"></script>
                    
                    <script src="../../node_modules/bootstrap/js/sb-admin.min.js"></script>
                    

                </Helmet>

            
            
            </div>
        );
    }
}

export default App;