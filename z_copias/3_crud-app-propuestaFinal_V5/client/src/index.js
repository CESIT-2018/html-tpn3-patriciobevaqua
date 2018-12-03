
/* Bootstrap core CSS*/
import "./components/vendor/bootstrap/css/bootstrap.min.css"
/* Custom fonts for this template*/
import "./components/vendor/fontawesome-free/css/all.min.css"
/* Page level plugin CSS*/
import "./components/vendor/datatables/dataTables.bootstrap4.css"
import "../node_modules/bootstrap/css/sb-admin.css" 
import "./components/vendor/fontawesome-free/css/fontawesome.css"


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import registerServiceWorker from './registerServiceWorker';
// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const middleware = composeWithDevTools(applyMiddleware(reduxThunk));

const store = createStore(reducers, middleware);


ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

registerServiceWorker();
