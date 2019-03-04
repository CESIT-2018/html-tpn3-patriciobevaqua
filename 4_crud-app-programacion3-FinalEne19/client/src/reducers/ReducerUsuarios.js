import {
  usuariosTypes
} from '../actions/types';

const USUARIO_INITIAL_STATE = {};

const INITIAL_STATE = {
  listUsuarios: [],
  usuario: USUARIO_INITIAL_STATE,
  loading: false,
  errors: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  
    case usuariosTypes.NEW_USUARIO : {
      return {
        ...state
      }
    }

    case usuariosTypes.SAVE_USUARIO : {
      return {
        ...state,
        listUsuarios: [...state.listUsuarios, action.payload.data],
        errors: {}
      }
    }

   

    default:
      return state;
  }
}
