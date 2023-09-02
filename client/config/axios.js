import axios from 'axios';

const clientAxios = axios.create({
   baseURL: process.env.NEXT_PUBLIC_BACKENDURL,
})

export default clientAxios;