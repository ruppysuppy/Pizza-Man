import axios from 'axios'
import firebaseConfig from '../firebase/config'

const axiosInstance = axios.create({
    baseURL: `${firebaseConfig.databaseURL}`
})

export default axiosInstance