import clientAxios from './axios.js'

const tokenAuth = (token) => {
   token
      ? clientAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      : delete clientAxios.defaults.headers.common['Authorization'];

}

export default tokenAuth;