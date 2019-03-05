import axios from 'axios';
import {
  usuariosTypes
} from './types';


export const newUsuario = () => async dispatch => {   //acción para crear un nuevo usuario
  dispatch({ type: usuariosTypes.NEW_USUARIO  });
};

export const saveUsuario = (usuario) => async dispatch => {  //acción para guardar nuevo usuario
  var res = await axios.post('/api/usuarios', usuario);      // utiliza axios !!
  dispatch({ type: usuariosTypes.SAVE_USUARIO, payload: res });
};


