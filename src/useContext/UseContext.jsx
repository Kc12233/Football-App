import { useContext , useReducer  } from "react"
import { reducer } from "./reducer"
import { createContext } from "react"
import axios from "axios"


const initialState = {
    id : null,
    UserName :null,
    img  : null, 

}
export const useGlobalContext = createContext()


const UseContext = ({children}) => {
    const [state,dispatch] = useReducer(reducer , initialState)
  return (
     <>
     
     <useGlobalContext.Provider value={{dispatch,id:state.id  , Username : state.UserName , img : state.img}}>

            {children}

     </useGlobalContext.Provider>
       
        
         
     
     </>
  )
}
export const CustomUseContext = ()=>{
    return useContext( useGlobalContext)
}
export default UseContext