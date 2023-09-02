import {
   SUCCESFUL_REGISTRATION,
   ERROR_REGISTRATION,
   CLEAR_ALERT
} from '@/types'

export default (state, action) => {
   switch (action.type) {
      case SUCCESFUL_REGISTRATION:
      case ERROR_REGISTRATION:
         return {
            ...state,
            message: action.payload
         }
      case CLEAR_ALERT:
         return {
            ...state,
            message: null
         }
      default:
         return state;
   }
}