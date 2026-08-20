import { Check, Cone, X } from 'lucide-react'
import React, { useEffect } from 'react'
import axiosClient from '../axios/endPoint'

const PendingRequest = ( {fetchId , setL, type, data}) => {
    
    let CustomData = data &&  data?.date.substring(0,data.date.indexOf("T")) 
    let SecondCustom =  data &&  data?.date.substring(data.date.indexOf("T")+1,data.date.indexOf("."))

    const AccpetRequestToMyRoom = async (id)=>
        {
        
        fetchId(id)
       
        setL(true)
       
     try{
        
        const accpet = await axiosClient.post("/room/addMember" ,
              {
                "userId":data.userId,
                "roomId": data.roomId,
                "name":data.name,
                "img":data.img
            }


        )
        if(accpet.data.status =="add you ✅"){
                setL(false)
        }
            console.log(accpet)
     }
       catch(err){
        setL(false)
       }
    }
  return (
    <div className='PendingRequestCard'>
        <div className="avatarPEndingRequestCard">
            <div className="avatrPedingRequestCard">
                <img src={data ? data.img : "/testpic/man2.png"} alt='loading'/>
            </div>
        </div>
        <div className="ContentPendingRequestCard">
            <div className="info-content-pending">
                <h1><span className='inside-info-pending'>{data && data.name}</span> {type=="Pending" ?"invited you to your room" :"invited you freind request" } </h1>

                <div className="TIMElINE" style={{display:"flex",gap:"5px"}}>
                    <h1> {CustomData} </h1>
                    <h1 style={{color:"gold"}}>{SecondCustom}</h1>
             


                </div>
            </div>
        </div>
        <div className="answerPendingRequestCard">
            <div className="buttonInfoPending" onClick={()=>AccpetRequestToMyRoom(data.userId)}> <Check size={20}/> </div>
            <div className="buttonInfoPending" style={{color:"red"}}><X size={19}/></div>
        </div>
    </div>
  )
}

export default PendingRequest