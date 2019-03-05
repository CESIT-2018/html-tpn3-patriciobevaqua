import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; //configurar DevTools

import registerServiceWorker from './registerServiceWorker';
// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const middleware = composeWithDevTools(applyMiddleware(reduxThunk));   //configurar DevTools

const store = createStore(reducers, middleware);    //configurar DevTools


ReactDOM.render(                                      //poner la aplicación en redux
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

registerServiceWorker();
