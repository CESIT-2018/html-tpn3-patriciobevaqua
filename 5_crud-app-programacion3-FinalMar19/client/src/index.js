import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import { Provider } from 'react-redux';   //provider es con lo que se envuelve a la app para poder utilizar Redux
import { createStore, applyMiddleware } from 'redux';   // para crear el store de redux y la interfaces para relacionar react con redux
import reduxThunk from 'redux-thunk';   //es una función para que funcionen los dispacher, los encargados de enviar acciones a los reducer
import { composeWithDevTools } from 'redux-devtools-extension'; //configurar DevTools

import registerServiceWorker from './registerServiceWorker';
// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const middleware = composeWithDevTools(applyMiddleware(reduxThunk));   //configurar DevTools

const store = createStore(reducers, middleware);    //configurar DevTools


ReactDOM.render(                                      
    <Provider store={store}><App /></Provider>,               //poner la aplicación en redux
    document.getElementById('root')
);

registerServiceWorker();
