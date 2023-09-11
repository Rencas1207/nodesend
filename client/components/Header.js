import authContext from "@/context/auth/authContext";
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect } from "react";

export const Header = () => {
   const AuthContext = useContext(authContext);
   const { userAuthenticated, user, signOut, authenticated } = AuthContext;

   useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
         userAuthenticated()
      }
   }, [authenticated])

   return (
      <header className="py-8 flex flex-col md:flex-row items-center justify-between">
         <Link href="/">
            <Image
               width={64}
               height={50}
               className="w-64 mb-8 md:mb-0"
               src="/logo.svg"
               alt="logo react node send"
               priority
            />
         </Link>

         <div>
            {
               user ? (
                  <div className="flex  items-center">
                     <p className="mr-2">Hola {user.name}</p>
                     <button
                        className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
                        type="button"
                        onClick={() => signOut()}
                     >
                        Cerrar sesión
                     </button>
                  </div>

               ) : <>
                  <Link href="/login" className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-5">
                     Iniciar Sesión
                  </Link>
                  <Link href="/createaccount" className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">
                     Crear cuenta
                  </Link>
               </>
            }

         </div >
      </header >
   )
}

