import {
   SHOW_ALERT,
   CLEAR_ALERT,
   UPLOAD_FILE_SUCCESS,
   UPLOAD_FILE_ERROR,
   CREATE_LINK_SUCCESS,
   CREATE_LINK_ERROR,
   UPLOAD_FILE
} from "@/types"

export default (state, action) => {
   switch (action.type) {
      case SHOW_ALERT:
         return {
            ...state,
            msg_file: action.payload
         }
      case CLEAR_ALERT:
         return {
            ...state,
            msg_file: ''
         }
      case UPLOAD_FILE:
         return {
            ...state,
            loading: true
         }
      case UPLOAD_FILE_SUCCESS:
         return {
            ...state,
            name: action.payload.name,
            original_name: action.payload.original_name,
            loading: null
         }

      case UPLOAD_FILE_ERROR:
         return {
            ...state,
            msg_file: action.payload,
            loading: null
         }
      default:
         return state
   }
}