import axios from 'axios';
import {
  todosTypes
} from './types';

export const fetchTodos = () => async dispatch => {    //acción para buscar todos los todos
  
  dispatch({ type: todosTypes.FETCH_TODOS_PENDING });
  
  try {
    var res = await axios.get('/api/todos');
    dispatch({ type: todosTypes.FETCH_TODOS_FULFILLED, payload: res });
  } catch (error) {
    dispatch({ type: todosTypes.FETCH_TODOS_REJECTED, payload: error });
  }

};

export const newTodo = () => async dispatch => {   //acción para crear un nuevo todo
  dispatch({ type: todosTypes.NEW_TODO  });
};

export const saveTodo = (todo) => async dispatch => {  //acción para guardar todo
  var res = await axios.post('/api/todos', todo);      // utiliza axios !!
  dispatch({ type: todosTypes.SAVE_TODO, payload: res });
};

export const fetchTodoById = (id) => async dispatch => {  //acción para buscar un todo por id
  
  dispatch({ type: todosTypes.FETCH_TODOS_BY_ID_PENDING });
  
  try {
    const res = await axios.get('/api/todos/' + id);
    dispatch({ type: todosTypes.FETCH_TODOS_BY_ID_FULFILLED, payload: res });
  } catch (error) {
    dispatch({ type: todosTypes.FETCH_TODOS_BY_ID_REJECTED });
  }

};

export const updateTodo = (todo) => async dispatch => {     //acción para actualizar un todo
  var res = await axios.put(`/api/todos/${todo._id}`, todo);  // utiliza axios !!
  return dispatch({
    type: todosTypes.UPDATE_TODO,
    payload: res
  })
}

export const deleteTodo = (id) => async dispatch => {     // acción para borrar un todo

  var res = await axios.delete(`/api/todos/${id}`);  // utiliza axios !!

  return dispatch({
    type: todosTypes.DELETE_TODO,
    payload: res
  })
}
