import React from 'react';
import ReactDOM from 'react-dom';   //dom viene del documento html.
import App from './components/App'; 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // va a inyectar el componente app en el dom
registerServiceWorker();
