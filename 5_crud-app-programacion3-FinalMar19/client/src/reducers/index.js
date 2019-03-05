import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';   // Redux Form
import reducerTodos from './ReducerTodos';

import reducerContactos from './ReducerContactos';
import reducerUsuarios from './ReducerUsuarios';

import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({         // Redux Form
  form: reduxForm,
  todoDS: reducerTodos,
  contactoDS: reducerContactos,
  usuarioDS: reducerUsuarios,
  errors: errorReducer,
  auth: authReducer
 
});
