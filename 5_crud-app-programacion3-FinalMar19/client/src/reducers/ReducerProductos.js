import {
  productosTypes
} from '../actions/types';

const PRODUCTO_INITIAL_STATE = {};

const INITIAL_STATE = {
  listProductos: [],
  producto: PRODUCTO_INITIAL_STATE,
  loading: false,
  errors: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case productosTypes.FETCH_PRODUCTOS_FULFILLED:
      return {
        ...state,
        listProductos: action.payload.data,
        loading: false
      };
    
    case productosTypes.FETCH_PRODUCTOS_PENDING:
      return {
        ...state,
        loading: true
      };

    case productosTypes.FETCH_PRODUCTOS_REJECTED:
      return {
        ...state,
        loading: false
      };

    case productosTypes.NEW_PRODUCTO : {
      return {
        ...state
      }
    }

    case productosTypes.SAVE_PRODUCTO : {
      return {
        ...state,
        listProductos: [...state.listProductos, action.payload.data],
        errors: {}
      }
    }

    case productosTypes.FETCH_PRODUCTOS_BY_ID_FULFILLED: {
      return {
        ...state,
        producto: action.payload.data,
        loading: false
      }
    }
    
    case productosTypes.FETCH_PRODUCTOS_BY_ID_PENDING: {
      return {
        ...state,
        producto: {},
        loading: true
      }
    }

    case productosTypes.FETCH_PRODUCTOS_BY_ID_REJECTED: {
      return {
        ...state,
        loading: false
      }
    }

    case productosTypes.UPDATE_PRODUCTO: {
      const producto = action.payload.data;
      return {
        ...state,
        producto: PRODUCTO_INITIAL_STATE,
        listProductos: state.listProductos.map(item => item._id === producto._id ? producto : item)
      }
    }

    case productosTypes.DELETE_PRODUCTO: {
      const id = action.payload.data._id;
      return {
        ...state,
        listProductos: state.listProductos.filter(item => item._id !== id)
      }
    }

    default:
      return state;
  }
}
