import Layout from '@/components/Layout'
import clientAxios from '@/config/axios'

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
   console.log(link);
   return (
      <Layout>
         <h1 className='text-4xl text-center text-gray-700'>Descarga tu archivo: </h1>
         <div className='flex items-center justify-center mt-10'>
            <a
               href={`${process.env.NEXT_PUBLIC_BACKENDURL}/api/files/${link.file}`}
               className='bg-red-500 text-center px-10 py-3 rounded uppercase font-bold text-white cursor-pointer'
               download>
               Aquí
            </a>
         </div>
      </Layout>
   )
}