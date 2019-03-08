import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';   // Redux Form
import reducerTodos from './ReducerTodos';
import reducerProductos from './ReducerProductos';
import reducerServicios from './ReducerServicios';

import reducerContactos from './ReducerContactos';
import reducerUsuarios from './ReducerUsuarios';

import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({         // Redux Form  acá estamos formando el data store que viene a ser el lugar donde están todos los reducers
  form: reduxForm,
  todoDS: reducerTodos,      //acá todoDS es el data store de todos, que viene de los reducers, para el caso reducerTodos
  productoDS: reducerProductos,
  servicioDS: reducerServicios,
  contactoDS: reducerContactos,
  usuarioDS: reducerUsuarios,
  errors: errorReducer,
  auth: authReducer
 
});
