import axiosClient from "../axios/endPoint"
 
export const RefreshTheToken  =  async ()=>{
    
    
    try{
        const RefreshTokenUrl =  await axiosClient.post("/ReinitializingToken",{},{
            withCredentials:true
        })
        
        return RefreshTokenUrl

    }catch(error){
         
       return error.response.data
    }
}