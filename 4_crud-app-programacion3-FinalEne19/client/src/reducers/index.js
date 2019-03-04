import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';   // Redux Form
import reducerTodos from './ReducerTodos';

import reducerContactos from './ReducerContactos';
import reducerUsuarios from './ReducerUsuarios';


export default combineReducers({         // Redux Form
  form: reduxForm,
  todoDS: reducerTodos,
  contactoDS: reducerContactos,
  usuarioDS: reducerUsuarios
});
