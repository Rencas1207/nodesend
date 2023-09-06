import appContext from "./appContext"
import {
   SHOW_ALERT,
   CLEAR_ALERT,
   UPLOAD_FILE_SUCCESS,
   UPLOAD_FILE_ERROR,
   CREATE_LINK_SUCCESS,
   CREATE_LINK_ERROR
} from "@/types"

const AppState = ({ children }) => {
   return (
      <appContext.Provider
         value={{

         }}>
         {children}
      </appContext.Provider>
   )
}

export default AppState;