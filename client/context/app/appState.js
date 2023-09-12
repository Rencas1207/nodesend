import { useReducer } from "react";
import appContext from "./appContext";
import {
   SHOW_ALERT,
   CLEAR_ALERT,
   UPLOAD_FILE_SUCCESS,
   UPLOAD_FILE_ERROR,
   CREATE_LINK_SUCCESS,
   CREATE_LINK_ERROR,
   UPLOAD_FILE,
   CLEAR_STATE
} from "@/types"
import appReducer from "./appReducer";
import clientAxios from "@/config/axios";

const AppState = ({ children }) => {

   const initialState = {
      msg_file: null,
      name: '',
      original_name: '',
      loading: null,
      downloads: 1,
      password: '',
      author: null,
      url: ''
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

   const uploadFile = async (formData, fileName) => {

      dispatch({
         type: UPLOAD_FILE,
      })

      try {
         const response = await clientAxios.post('api/files', formData);
         dispatch({
            type: UPLOAD_FILE_SUCCESS,
            payload: {
               name: response.data.file,
               original_name: fileName
            }
         })
      } catch (error) {
         dispatch({
            type: UPLOAD_FILE_ERROR,
            payload: error.response.data.msg
         })
      }
   }

   const createLink = async () => {
      const data = {
         name: state.name,
         original_name: state.original_name,
         downloads: state.downloads,
         password: state.password,
         author: state.author
      }

      try {
         const response = await clientAxios.post('api/links', data)
         dispatch({
            type: CREATE_LINK_SUCCESS,
            payload: response.data.msg
         });
      } catch (error) {
         console.log(error);
      }
   }

   const clearState = () => {
      dispatch({
         type: CLEAR_STATE
      })
   }

   return (
      <appContext.Provider
         value={{
            msg_file: state.msg_file,
            name: state.name,
            original_name: state.original_name,
            loading: state.loading,
            downloads: state.downloads,
            password: state.password,
            author: state.author,
            url: state.url,
            showAlert,
            uploadFile,
            createLink,
            clearState
         }}>
         {children}
      </appContext.Provider>
   )
}

export default AppState;