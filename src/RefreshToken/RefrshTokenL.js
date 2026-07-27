import axios from "axios"
 
export const RefreshTheToken  =  async ()=>{
    
    
    try{
        const RefreshTokenUrl =  await axios.post("http://localhost:3000/ReinitializingToken",{},{
            withCredentials:true
        })
        return RefreshTokenUrl

    }catch(error){
       return error.response.data
    }
}