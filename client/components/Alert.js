import authContext from "@/context/auth/authContext"
import { useContext } from "react"


const Alert = () => {
   const AuthContext = useContext(authContext);
   const { message } = AuthContext;
   return (
      <div className="bg-red-500 rounded-lg py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto">
         {message}
      </div>
   )
}

export default Alert