import {
   SHOW_ALERT,
   CLEAR_ALERT,
   UPLOAD_FILE_SUCCESS,
   UPLOAD_FILE_ERROR,
   CREATE_LINK_SUCCESS,
   CREATE_LINK_ERROR,
   UPLOAD_FILE,
   CLEAR_STATE,
   ADD_PASSWORD,
   ADD_DOWNLOADS
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

      case CREATE_LINK_SUCCESS:
         return {
            ...state,
            url: action.payload
         }

      case CLEAR_STATE:
         return {
            ...state,
            msg_file: null,
            name: '',
            original_name: '',
            loading: null,
            downloads: 1,
            password: '',
            author: null,
            url: ''
         }

      case ADD_PASSWORD:
         return {
            ...state,
            password: action.payload
         }

      case ADD_DOWNLOADS:
         return {
            ...state,
            downloads: action.payload
         }
      default:
         return state
   }
}