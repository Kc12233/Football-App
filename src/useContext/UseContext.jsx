import { useContext , useEffect, useReducer  } from "react"
import { reducer } from "./reducer"
import { createContext } from "react"
import axios from "axios"
import axiosClient from "../axios/endPoint"
import { useNavigate } from "react-router-dom"


const initialState = {
    id : null,
    UserName :null,
    img  : null, 

}
export const useGlobalContext = createContext()


const UseContext = ({children}) => {
    const [state,dispatch] = useReducer(reducer , initialState)
    const Nav = useNavigate()
    const isLogin = JSON.parse(localStorage.getItem("_login"))
   

    useEffect(() => {
       
        const initializeUserDataIFweNeedIt  = async () => {
        

         try{


               if (!state.UserName || !state.id || !state.img &&  isLogin) {
                  
  
                 const {data}= await axiosClient.get("/getmydata")
                 console.log(data)
                
   
  
  
                 if (data) {
                    dispatch({
                       type: "ADD_ID",
                       payload: {
                          id: data.id,
                          UserName: data.user_name,
                          img: data.img
  
                       }
                    })
                 }
  
  
               }


         }catch(err){
          
            if(err.message==="missing Token"  ||err.message =="expired Refresh token")
            {
               Nav("/login")
            }
         }
      
 
        }
  
        initializeUserDataIFweNeedIt ()
     }, [])
    



     
    
  return (
     <>
     
     <useGlobalContext.Provider value={{
          dispatch,
          id:state.id,
          Username : state.UserName,
         img : state.img}}>

            {children}

     </useGlobalContext.Provider>
       
        
         
     
     </>
  )
}
export const useAuth = ()=>{
    return useContext(useGlobalContext)
}
export default UseContext