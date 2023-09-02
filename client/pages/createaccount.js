import Layout from "@/components/Layout";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CreateAccount() {

   // form and validation with formik & yup
   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         password: ''
      },
      validationSchema: Yup.object({
         name: Yup.string()
            .required('El nombre es obligatorio'),
         email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
         password: Yup.string().required('El password es obligatorio').min(6, 'El password debe contener al menos 6 caracteres')

      }),
      onSubmit: (valores) => {
         console.log(valores);
      }
   })

   return (
      <Layout>
         <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32 ">
            <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">Crear cuenta</h2>

            <div className="flex justify-center mt-5">
               <div className="w-full max-w-lg">
                  <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                     <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
                           Nombre
                        </label>
                        <input
                           type="text"
                           name="name"
                           id="name"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                           placeholder="Nombre de usuario"
                           value={formik.values.name}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        {
                           formik.touched.name && formik.errors.name ? (
                              <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                 <p className="font-bold">Error</p>
                                 <p>{formik.errors.name}</p>
                              </div>
                           ) : null
                        }
                     </div>
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

