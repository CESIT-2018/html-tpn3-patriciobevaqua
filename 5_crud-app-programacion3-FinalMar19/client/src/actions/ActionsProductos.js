import axios from 'axios';
import {
  productosTypes
} from './types';

export const fetchProductos = () => async dispatch => {
  
  dispatch({ type: productosTypes.FETCH_PRODUCTOS_PENDING });
  
  try {
    var res = await axios.get('/api/productos');
    dispatch({ type: productosTypes.FETCH_PRODUCTOS_FULFILLED, payload: res });
  } catch (error) {
    dispatch({ type: productosTypes.FETCH_PRODUCTOS_REJECTED, payload: error });
  }

};

export const newProducto = () => async dispatch => {
  dispatch({ type: productosTypes.NEW_PRODUCTO  });
};

export const saveProducto = (producto) => async dispatch => {
  var res = await axios.post('/api/productos', producto);
  dispatch({ type: productosTypes.SAVE_PRODUCTO, payload: res });
};

export const fetchProductoById = (id) => async dispatch => {
  
  dispatch({ type: productosTypes.FETCH_PRODUCTOS_BY_ID_PENDING });
  
  try {
    const res = await axios.get('/api/productos/' + id);
    dispatch({ type: productosTypes.FETCH_PRODUCTOS_BY_ID_FULFILLED, payload: res });
  } catch (error) {
    dispatch({ type: productosTypes.FETCH_PRODUCTOS_BY_ID_REJECTED });
  }

};

export const updateProducto = (producto) => async dispatch => {
  var res = await axios.put(`/api/productos/${producto._id}`, producto);
  return dispatch({
    type: productosTypes.UPDATE_PRODUCTO,
    payload: res
  })
}

export const deleteProducto = (id) => async dispatch => {

  var res = await axios.delete(`/api/productos/${id}`);

  return dispatch({
    type: productosTypes.DELETE_PRODUCTO,
    payload: res
  })
}
