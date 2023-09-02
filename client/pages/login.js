import Layout from "@/components/Layout";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
   const formik = useFormik({
      initialValues: {
         email: '',
         password: ''
      },
      validationSchema: Yup.object({
         email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
         password: Yup.string().required('El password no puede ir vacío')

      }),
      onSubmit: (valores) => {
         console.log(valores);
      }
   })
   return (
      <Layout>
         <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32 ">
            <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">Iniciar Sesión</h2>

            <div className="flex justify-center mt-5">
               <div className="w-full max-w-lg">
                  <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>

                     <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                           Email
                        </label>
                        <input
                           type="email"
                           name="email"
                           id="email"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                           placeholder="Email del usuario"
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        {
                           formik.touched.email && formik.errors.email ? (
                              <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                 <p className="font-bold">Error</p>
                                 <p>{formik.errors.email}</p>
                              </div>
                           ) : null
                        }
                     </div>
                     <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                           Contraseña
                        </label>
                        <input
                           type="password"
                           name="password"
                           id="password"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                           placeholder="Contraseña del usuario"
                           value={formik.values.password}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        {
                           formik.touched.password && formik.errors.password ? (
                              <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                 <p className="font-bold">Error</p>
                                 <p>{formik.errors.password}</p>
                              </div>
                           ) : null
                        }
                     </div>
                     <input
                        type="submit"
                        value="Iniciar Sesión"
                        className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer"
                     />
                  </form>
               </div>
            </div>
         </div>
      </Layout>
   )
}
