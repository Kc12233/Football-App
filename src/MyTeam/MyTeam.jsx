import React, { useEffect, useState } from 'react'
import "./MyTeam.css"
import { useNavigate } from 'react-router-dom'
import Card from '../Component/Card'
import { Plus, X } from 'lucide-react'
import { CustomUseContext } from '../useContext/UseContext'
import { RefreshTheToken } from '../RefreshToken/RefrshTokenL'
import axiosClient from '../axios/endPoint'

const MyTeam = () => {
    
    const Nav = useNavigate()
    const HandelReturn = () =>{
        Nav("/login")
    }
    const [off,SetOff] = useState(true)
    const {Username , id ,img , dispatch}  =  CustomUseContext()  


 // make this like director
  
  const testRequest = async () => {


      try {
         const data = await axiosClient.post("/test", {}, { withCredentials: true })


         console.log(data.data.message)

      } catch (err) {
        console.log(err.message)
         
         if (err?.response?.data.message == "Invalid or expired token") {

            const r = await RefreshTheToken()
            console.log(r, "gff")
            const RefrsrhThedata = await axiosClient.post("/test", {}, { withCredentials: true })
            console.log(RefrsrhThedata , "this after we refresh the toke")

            
            if (r?.message == "Your Refresh Token End up You should login ") {

               Nav("/login")
               return
            }


            if (r) {

               dispatch({
                  type: "ADD_ID",
                  payload: {
                     id: r.data.data.id,
                     UserName: r.data.data.user_name,
                     img: r.data.data.img

                  }
               })


            }


         }





      }
   }

   
   useEffect(() => {
        console.log("The Componet Mount")
        const RenderTheDataWhenComponentRefresh = async () => {
           try {
              if (!Username || !id || !img) {
                 console.log("Should be Render The data")
  
                 const r = await RefreshTheToken()
                 console.log(r, "<= haaa")
  
               if (r?.message == "Your Refresh Token End up You should login " ||
                   r?.message == "missing id" ||
                   r?.message === "we dont found you"
                  ) {
                    Nav("/login")
                    return
                 }
  
  
  
  
                 if (r) {
                    dispatch({
                       type: "ADD_ID",
                       payload: {
                          id: r.data.data.id,
                          UserName: r.data.data.user_name,
                          img: r.data.data.img
  
                       }
                    })
                 }
  
  
  
              }
           }
           catch (error) {
              console.log(error.message)
           }
        }
  
        RenderTheDataWhenComponentRefresh()
     }, [])
    
 



   
  return (
    <div className='myTeam'>

      <div className="navbar-header">

        
        <div className="nav-option">
            <div className="first-nav-option">
                <img src="./myTeamIcon/arrow.svg" alt="" onClick={()=>HandelReturn()} />
                <h1 onClick={()=>console.log("my id",id)}>My Team</h1>
            </div>
            <div className="seconde-nav-option">
                 <img src="./myTeamIcon/search.svg" onClick={()=>testRequest()} alt="" />
                 <img src="./myTeamIcon/Option.svg" alt="" />
            </div>
        </div>


      

      </div>


        <div className="Session-groups">
           
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
       
         
        </div>


  <div className="add__session bounce" onClick={()=>SetOff((prev)=>!prev)}> 
   
    {off ?   <Plus size={25}/>  :  <X size={25}/>}
  </div>

<div className="ContainerSessionadding" style={{ zIndex:off&& -1}}>


  <div 
  onClick={()=>Nav("/JoinSession")}
  
  className={`create_session_card bounce ${off&& 'off'} `}>
    <h1>Join Session</h1>
    <div className='avatar_create__session_card'>
      <img src='/navbaricon/Koura.png'/>
    </div>
  </div>
  
  
    <div 
    onClick={()=>Nav("/CreateSession")}
    
    className={`create_session_card2 bounce ${off && 'off'}`}>
    <h1>Create Session</h1>
    <div className='avatar_create__session_card2'>
      <img src='\myTeamIcon/plus.svg'/>
    </div>
  </div>
  



</div>



    </div>
  )
}

export default MyTeam



 