import React, { Component } from 'react';
//import {BrowserRouter} from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';


// Containers
import { DefaultLayout } from './containers';

class App extends Component {
    render() {
        return (
            <HashRouter>
            <Switch>
            
            <Route path="/" name="Home" component={DefaultLayout} />
    
            </Switch>
          </HashRouter>
        );
    }
}

export default App;