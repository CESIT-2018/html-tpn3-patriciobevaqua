import {
  contactosTypes
} from '../actions/types';

const CONTACTO_INITIAL_STATE = {};

const INITIAL_STATE = {
  listContactos: [],
  contacto: CONTACTO_INITIAL_STATE,
  loading: false,
  errors: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  
    case contactosTypes.NEW_CONTACTO : {
      return {
        ...state
      }
    }

    case contactosTypes.SAVE_CONTACTO : {
      return {
        ...state,
        listContactos: [...state.listContactos, action.payload.data],
        errors: {}
      }
    }

   

    default:
      return state;
  }
}
