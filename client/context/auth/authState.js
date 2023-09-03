import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import {
   AUTHENTICATED_USER,
   SUCCESFUL_REGISTRATION,
   ERROR_REGISTRATION,
   CLEAR_ALERT,
   ERROR_LOGIN,
   SUCCESFUL_LOGIN,
   SIGN_OUT
}
   from '@/types'
import clientAxios from "@/config/axios";
import tokenAuth from "@/config/tokenAuth";

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

   // return the authenticated user based on the JWT
   const userAuthenticated = async () => {
      const token = localStorage.getItem('token');

      if (token) {
         tokenAuth(token);
      }

      try {
         const response = await clientAxios.get('/api/auth');
         if (response.data.user) {
            dispatch({
               type: AUTHENTICATED_USER,
               payload: response.data.user
            })
         }

      } catch (error) {
         dispatch({
            type: ERROR_LOGIN,
            payload: error.response.data.msg
         })
      }
   }

   // sign out
   const signOut = () => {
      dispatch({
         type: SIGN_OUT,
      })
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
            login,
            userAuthenticated,
            signOut
         }}
      >
         {children}
      </authContext.Provider>
   )
}

export default AuthState;