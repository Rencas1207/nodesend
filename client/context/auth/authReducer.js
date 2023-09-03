import {
   SUCCESFUL_REGISTRATION,
   ERROR_REGISTRATION,
   CLEAR_ALERT,
   SUCCESFUL_LOGIN,
   ERROR_LOGIN,
   AUTHENTICATED_USER,
   SIGN_OUT
} from '@/types'

export default (state, action) => {
   switch (action.type) {
      case SUCCESFUL_REGISTRATION:
      case ERROR_REGISTRATION:
      case ERROR_LOGIN:
         return {
            ...state,
            message: action.payload
         }
      case SUCCESFUL_LOGIN:
         localStorage.setItem('token', action.payload);
         return {
            ...state,
            token: action.payload,
            authenticated: true
         }
      case CLEAR_ALERT:
         return {
            ...state,
            message: null
         }
      case AUTHENTICATED_USER: {
         return {
            ...state,
            user: action.payload,
            authenticated: true,
         }
      }
      case SIGN_OUT: {
         localStorage.removeItem('token');
         return {
            ...state,
            user: null,
            token: null,
            authenticated: false
         }
      }
      default:
         return state;
   }
}