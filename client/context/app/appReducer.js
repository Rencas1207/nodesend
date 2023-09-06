import {
   SHOW_ALERT,
   CLEAR_ALERT,
   UPLOAD_FILE_SUCCESS,
   UPLOAD_FILE_ERROR,
   CREATE_LINK_SUCCESS,
   CREATE_LINK_ERROR
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
      default:
         return state
   }
}