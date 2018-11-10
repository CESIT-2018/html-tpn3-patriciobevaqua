import { FETCH_PRODUCTOS, NEW_PRODUCTO, SAVE_PRODUCTO, FETCH_PRODUCTOS_BY_ID, UPDATE_PRODUCTO } from '../actions/types';

const PRODUCTO_INITIAL_STATE = {};

const INITIAL_STATE = {
  list: [],
  producto: PRODUCTO_INITIAL_STATE,
  errors: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTOS:
      return {
        ...state,
        list: action.payload
      };

    case NEW_PRODUCTO : {
      return {
        ...state,
        producto: PRODUCTO_INITIAL_STATE
      }
    }

    case SAVE_PRODUCTO : {
      return {
        ...state,
        list: [...state.list, action.payload.data],
        errors: {}
      }
    }

    case FETCH_PRODUCTOS_BY_ID: {
      return {
        ...state,
        producto: action.payload.data
      }
    }

    case UPDATE_PRODUCTO: {
      const producto = action.payload.data;
      return {
        ...state,
        producto: PRODUCTO_INITIAL_STATE,
        list: state.list.map(item => item._id === producto._id ? producto : item)
      }
    }

    default:
      return state;
  }
}
