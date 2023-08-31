import Layout from "@/components/Layout";

export default function CreateAccount() {
   return (
      <Layout>
         <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32 ">
            <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">Crear cuenta</h2>

            <div className="flex justify-center mt-5">
               <div className="w-full max-w-lg">
                  <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
                     <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
                           Nombre
                        </label>
                        <input type="text" name="name" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" placeholder="Nombre de usuario" />
                     </div>
                     <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                           Email
                        </label>
                        <input type="email" name="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" placeholder="Email del usuario" />
                     </div>
                     <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                           Contraseña
                        </label>
                        <input type="password" name="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" placeholder="Contraseña del usuario" />
                     </div>
                     <input
                        type="submit"
                        value="Crear cuenta"
                        className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer"
                     />
                  </form>
               </div>
            </div>
         </div>
      </Layout>
   )
}

