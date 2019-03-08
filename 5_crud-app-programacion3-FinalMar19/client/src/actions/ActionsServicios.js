import axios from 'axios';
import {
  serviciosTypes
} from './types';

export const fetchServicios = () => async dispatch => {
  
  dispatch({ type: serviciosTypes.FETCH_SERVICIOS_PENDING });
  
  try {
    var res = await axios.get('/api/servicios');
    dispatch({ type: serviciosTypes.FETCH_SERVICIOS_FULFILLED, payload: res });
  } catch (error) {
    dispatch({ type: serviciosTypes.FETCH_SERVICIOS_REJECTED, payload: error });
  }

};

export const newServicio = () => async dispatch => {
  dispatch({ type: serviciosTypes.NEW_SERVICIO  });
};

export const saveServicio = (servicio) => async dispatch => {
  var res = await axios.post('/api/servicios', servicio);
  dispatch({ type: serviciosTypes.SAVE_SERVICIO, payload: res });
};

export const fetchServicioById = (id) => async dispatch => {
  
  dispatch({ type: serviciosTypes.FETCH_SERVICIOS_BY_ID_PENDING });
  
  try {
    const res = await axios.get('/api/servicios/' + id);
    dispatch({ type: serviciosTypes.FETCH_SERVICIOS_BY_ID_FULFILLED, payload: res });
  } catch (error) {
    dispatch({ type: serviciosTypes.FETCH_SERVICIOS_BY_ID_REJECTED });
  }

};

export const updateServicio = (servicio) => async dispatch => {
  var res = await axios.put(`/api/servicios/${servicio._id}`, servicio);
  return dispatch({
    type: serviciosTypes.UPDATE_SERVICIO,
    payload: res
  })
}

export const deleteServicio = (id) => async dispatch => {

  var res = await axios.delete(`/api/servicios/${id}`);

  return dispatch({
    type: serviciosTypes.DELETE_SERVICIO,
    payload: res
  })
}
