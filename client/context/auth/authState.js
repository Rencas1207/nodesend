import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import { AUTHENTICATED_USER } from '@/types'
import clientAxios from "@/config/axios";

const AuthState = ({ children }) => {

   // define an initial state
   const initialState = {
      token: '',
      authenticated: null,
      user: null,
      message: null
   }

   // define the reduce
   const [state, dispatch] = useReducer(authReducer, initialState)

   // authenticated user
   const authenticatedUser = (name) => {
      dispatch({
         type: AUTHENTICATED_USER,
         payload: name
      })
   }

   // register new users
   const registerUser = async (data) => {
      console.log(process.env.NEXT_PUBLIC_BACKENDURL);
      try {
         const response = await clientAxios.post('/api/users', data);
         console.log(response);
      } catch (error) {
         console.log(error.response);
      }
   }

   return (
      <authContext.Provider
         value={{
            token: state.token,
            authenticated: state.authenticated,
            user: state.user,
            message: state.message,
            registerUser,
            authenticatedUser,
         }}
      >
         {children}
      </authContext.Provider>
   )
}

export default AuthState;