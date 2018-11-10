import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import reducerTodos from './ReducerTodos';
import ReducerProductos from './ReducerProductos';

export default combineReducers({
  form: reduxForm,
  todoDS: reducerTodos,
  productoDS: ReducerProductos

});
