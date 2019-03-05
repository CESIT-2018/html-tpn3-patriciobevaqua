import axios from 'axios';
import {
  contactosTypes
} from './types';



export const newContacto = () => async dispatch => {   //acción para crear un nuevo contacto
  dispatch({ type: contactosTypes.NEW_CONTACTO  });
};

export const saveContacto = (contacto) => async dispatch => {  //acción para guardar contacto
  var res = await axios.post('/api/contactos', contacto);      // utiliza axios !!
  dispatch({ type: contactosTypes.SAVE_CONTACTO, payload: res });
};


