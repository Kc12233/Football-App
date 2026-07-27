 

import axios from "axios"
const EndPointUrl =import.meta.env.VITE_URL
let  axiosClient = axios.create({
  baseURL: EndPointUrl,
  
});


export default  axiosClient