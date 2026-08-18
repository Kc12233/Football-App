import React, { useEffect, useState } from 'react'
import "./online.css"
import socket from '../socketClient/socket'
const Online = () => {
    const [users,setUsers] = useState(()=>JSON.parse(localStorage.getItem("online"))|| 0 )
    const [bounce,setBounce] = useState(false)
 
    useEffect(()=>{
        const HandelOnline = (data)=>{ 
            console.log(data)
            setUsers(data.length)
            setBounce(true)
            setTimeout(() => {setBounce(false)  }, 1000);
            localStorage.setItem("online",JSON.stringify(data.length))


        }
        socket.on("online",HandelOnline)
        return()=>{
           socket.off("online",HandelOnline)
        }
    },[])
 


  return (
    <div className='online'>
         <div className={`onlineIcon ${bounce && 'bounceOnline'}`}></div>
        <h1>{users}</h1>
        <h1>online</h1>
       
    </div>
  )
}

export default Online