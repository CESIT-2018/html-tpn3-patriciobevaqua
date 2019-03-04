
import {
  serviciosTypes
} from '../actions/types';

const SERVICIO_INITIAL_STATE={};

const INITIAL_STATE = {
  lista: [],
  servicio:SERVICIO_INITIAL_STATE,
   loading:false,
   errors:{}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case serviciosTypes.LISTA_SERVICIOS_CUMPLIDO:
      return {
        ...state,
        lista: action.payload.data,
        loading:false
      };

      case serviciosTypes.LISTA_SERVICIOS_PENDIENTE:
      return {
        ...state,
        loading:true
      };

      case serviciosTypes.LISTA_SERVICIOS_RECHAZADO:
      return {
        ...state,
        loading:false
      };

      case serviciosTypes.NEW_SERVICIO:{
        return {
          ...state
        }
      }
      case serviciosTypes.SAVE_SERVICIO:{
        return{
          ...state,
          lista:[...state.lista,action.payload.data],
          errors:{}
          
        }
      }

      case serviciosTypes.FETCH_SERVICIO_BY_ID_CUMPLIDO:{
        return{
          ...state,
          servicio:action.payload.data,
          loading:false
        }
      }


      case serviciosTypes.FETCH_SERVICIO_BY_ID_PENDIENTE:{
        return{
          ...state,
          servicio:{},
          loading:true
        }
      }

      case serviciosTypes.FETCH_SERVICIO_BY_ID_RECHAZADO:{
        return{
          ...state,
          loading:false
        }
      }

      case serviciosTypes.UPDATE_SERVICIO:{
        const servicio=action.payload.data;
        return{
          ...state,
          servicio:SERVICIO_INITIAL_STATE,
          lista:state.lista.map(item=>item._id === servicio._id ? servicio: item)
        }
      }

      case serviciosTypes.DELETE_SERVICIO:{
        const id=action.payload.data._id;
        return{
          ...state,
        
         lista:state.lista.filter(item=>item._id !== id)
        }
      }

      default:
      return state;
  }
}