import authContext from "@/context/auth/authContext"
import appContext from "@/context/app/appContext"
import { useContext } from "react"

const Alert = () => {
   const AuthContext = useContext(authContext);
   const { message } = AuthContext;

   const AppContext = useContext(appContext);
   const { msg_file } = AppContext;

   return (
      <div className="bg-red-500 rounded-lg py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto">
         {message || msg_file}
      </div>
   )
}

export default Alert