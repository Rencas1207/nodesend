import { useReducer } from "react";
import appContext from "./appContext";
import {
   SHOW_ALERT,
   CLEAR_ALERT,
   UPLOAD_FILE_SUCCESS,
   UPLOAD_FILE_ERROR,
   CREATE_LINK_SUCCESS,
   CREATE_LINK_ERROR
} from "@/types"
import appReducer from "./appReducer";

const AppState = ({ children }) => {

   const initialState = {
      msg_file: null
   }

   const [state, dispatch] = useReducer(appReducer, initialState);

   const showAlert = (msg) => {
      dispatch({
         type: SHOW_ALERT,
         payload: msg
      })
      setTimeout(() => {
         dispatch({
            type: CLEAR_ALERT
         })
      }, 2000)
   }

   return (
      <appContext.Provider
         value={{
            msg_file: state.msg_file,
            showAlert
         }}>
         {children}
      </appContext.Provider>
   )
}

export default AppState;