import Layout from '@/components/Layout'
import clientAxios from '@/config/axios'
import { useState } from 'react';

export async function getServerSideProps({ params }) {
   const { link } = params;
   const response = await clientAxios.get(`/api/links/${link}`);

   return {
      props: {
         link: response.data
      }
   }
}

export async function getServerSidePaths() {
   const links = await clientAxios.get('/api/links');

   const paths = links.data.links.map((link) => {
      return {
         params: {
            link: link.url
         }
      }
   })

   return {
      paths,
      fallback: false
   }
}

export default ({ link }) => {
   const [hasPwd, setHasPwd] = useState(link.password);

   const verifyPassword = (e) => {
      e.preventDefault();

      console.log('verificando xd')
   }

   return (
      <Layout>
         {
            hasPwd ? (
               <>
                  <p className='text-center'>Este enlace esta protegido por un password, colocalo a continuación</p>
                  <div className="flex justify-center mt-5">
                     <div className="w-full max-w-lg">
                        <form
                           className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
                           onSubmit={e => verifyPassword(e)}
                        >
                           <div className="mb-4">
                              <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                                 Password
                              </label>
                              <input
                                 type="password"
                                 name="password"
                                 id="password"
                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                 placeholder="Password del enlace"
                              />
                              <input
                                 type="submit"
                                 value="Validar password"
                                 className="bg-red-500 mt-5 rounded-lg hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer"
                              />
                           </div>
                        </form>
                     </div>
                  </div>
               </>
            ) : (
               <>
                  <h1 className='text-4xl text-center text-gray-700'>Descarga tu archivo: </h1>
                  <div className='flex items-center justify-center mt-10'>
                     <a
                        href={`${process.env.NEXT_PUBLIC_BACKENDURL}/api/files/${link.file}`}
                        className='bg-red-500 text-center px-10 py-3 rounded uppercase font-bold text-white cursor-pointer'
                        download>
                        Aquí
                     </a>
                  </div>
               </>
            )
         }

      </Layout>
   )
}