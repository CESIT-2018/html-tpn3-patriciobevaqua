import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import reducerTodos from './ReducerTodos';
import reducerProductos from './ReducerProductos';
import reducerServicios from './ReducerServicios';


export default combineReducers({
  form: reduxForm,
  todoDS: reducerTodos,   //es el Data Store. El Data Store nuestro son los reducers
  productoDS: reducerProductos,
  servicios: reducerServicios

});
