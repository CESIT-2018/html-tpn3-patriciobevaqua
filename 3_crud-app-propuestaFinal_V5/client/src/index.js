import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import { Provider } from 'react-redux';   //une react con redux
import { createStore, applyMiddleware } from 'redux';  //para crear el store
import reduxThunk from 'redux-thunk';  //es para que funcione la función dispacher que tira las acciones que escucharan los reducers en redux
import { composeWithDevTools } from 'redux-devtools-extension'; 

import registerServiceWorker from './registerServiceWorker';
// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const middleware = composeWithDevTools(applyMiddleware(reduxThunk));

const store = createStore(reducers, middleware);  //se crea el store


ReactDOM.render(
    <Provider store={store}><App /></Provider>,   // mete react dentro de redux
    document.getElementById('root')
);

registerServiceWorker();
