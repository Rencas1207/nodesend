import Layout from '@/components/Layout'
import clientAxios from '@/config/axios'

export async function getStaticProps() {
   const response = await clientAxios.get('/api/links/pRYNeEVYV');
   console.log(response);

   return {
      props: {
         link: response.data
      }
   }
}

export async function getStaticPaths() {
   const links = await clientAxios.get('/api/links');
   return {
      paths: links.data.links.map(link => ({
         params: { link: link.url }
      })),
      fallback: true
   }
}

export default ({ link }) => {

   return (
      <Layout>
         <h1>Desde [enlace].js</h1>
      </Layout>
   )
}