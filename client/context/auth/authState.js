import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import {
   SUCCESFUL_REGISTRATION,
   ERROR_REGISTRATION,
   CLEAR_ALERT,
   ERROR_LOGIN,
   SUCCESFUL_LOGIN
}
   from '@/types'
import clientAxios from "@/config/axios";

const AuthState = ({ children }) => {

   // define an initial state
   const initialState = {
      token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
      authenticated: null,
      user: null,
      message: null,
      loading: null
   }

   // define the reduce
   const [state, dispatch] = useReducer(authReducer, initialState)

   // register new users
   const registerUser = async (data) => {
      try {
         const response = await clientAxios.post('/api/users', data);
         dispatch({
            type: SUCCESFUL_REGISTRATION,
            payload: response.data.msg
         })
      } catch (error) {
         dispatch({
            type: ERROR_REGISTRATION,
            payload: error.response.data.msg
         })
      }

      setTimeout(() => {
         dispatch({
            type: CLEAR_ALERT
         })
      }, 2000)
   }

   // authenticate user
   const login = async (data) => {
      try {
         const response = await clientAxios.post('/api/auth', data);
         dispatch({
            type: SUCCESFUL_LOGIN,
            payload: response.data.token
         })
         console.log(response);
      } catch (error) {
         dispatch({
            type: ERROR_LOGIN,
            payload: error.response.data.msg
         })
      }

      setTimeout(() => {
         dispatch({
            type: CLEAR_ALERT
         })
      }, 2000)
   }

   return (
      <authContext.Provider
         value={{
            token: state.token,
            authenticated: state.authenticated,
            user: state.user,
            message: state.message,
            loading: state.loading,
            registerUser,
            login
         }}
      >
         {children}
      </authContext.Provider>
   )
}

export default AuthState;