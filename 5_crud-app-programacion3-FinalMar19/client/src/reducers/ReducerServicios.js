import {
  serviciosTypes
} from '../actions/types';

const SERVICIO_INITIAL_STATE = {};

const INITIAL_STATE = {
  listServicios: [],
  servicio: SERVICIO_INITIAL_STATE,
  loading: false,
  errors: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case serviciosTypes.FETCH_SERVICIOS_FULFILLED:
      return {
        ...state,
        listServicios: action.payload.data,
        loading: false
      };
    
    case serviciosTypes.FETCH_SERVICIOS_PENDING:
      return {
        ...state,
        loading: true
      };

    case serviciosTypes.FETCH_SERVICIOS_REJECTED:
      return {
        ...state,
        loading: false
      };

    case serviciosTypes.NEW_SERVICIO : {
      return {
        ...state
      }
    }

    case serviciosTypes.SAVE_SERVICIO : {
      return {
        ...state,
        listServicios: [...state.listServicios, action.payload.data],
        errors: {}
      }
    }

    case serviciosTypes.FETCH_SERVICIOS_BY_ID_FULFILLED: {
      return {
        ...state,
        servicio: action.payload.data,
        loading: false
      }
    }
    
    case serviciosTypes.FETCH_SERVICIOS_BY_ID_PENDING: {
      return {
        ...state,
        servicio: {},
        loading: true
      }
    }

    case serviciosTypes.FETCH_SERVICIOS_BY_ID_REJECTED: {
      return {
        ...state,
        loading: false
      }
    }

    case serviciosTypes.UPDATE_SERVICIO: {
      const servicio = action.payload.data;
      return {
        ...state,
        servicio: SERVICIO_INITIAL_STATE,
        listServicios: state.listServicios.map(item => item._id === servicio._id ? servicio : item)
      }
    }

    case serviciosTypes.DELETE_SERVICIO: {
      const id = action.payload.data._id;
      return {
        ...state,
        listServicios: state.listServicios.filter(item => item._id !== id)
      }
    }

    default:
      return state;
  }
}
