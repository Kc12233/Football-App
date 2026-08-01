
import React, { useRef } from 'react'
import axiosClient from '../axios/endPoint'
import "../index.css"

const TestInterceptor = () => {
     
   
  // const BrowserRequest = async ()=>{
  //   const response = await axiosClient.post("/test")
   
  //   console.log(response.data)
      
  // } 

 
  // setInterval(async() => {
    
  //  await BrowserRequest()
  // }, 1000);

  // const BrowserRequest = async ()=>{
  //   const response = await axiosClient.post("/test")
  //     const response2 = await axiosClient.post("/test2")
  //   console.log(response.data)
  //   console.log(response2.data) 
  //   console.log("---------------------")    
  // } 

  const BrowserRequest = async()=>{
    const response = await Promise.all([
    axiosClient.post("/test"),
    axiosClient.post("/test2"),
    axiosClient.post("/test3"),
    axiosClient.post("/test4"),
  ]);
  
  console.log(response)
 

  }
  

  return (
    <div style={{background:"white",height:"100vh"}}>
  
      <div>TestInterceptor</div>
      <button 
       style={{
        width:"120px",
        fontWeight:"bold"
        ,
        letterSpacing:"1px"
        ,
        fontFamily:"-apple-system"
        ,
        borderRadius:"10px"
        ,
        border:"none",
        border:"1px solid green",
        cursor:"pointer",
        
       }}
      onPointerUp={()=>BrowserRequest()}>test</button>
    
    </div>
  
  )
}

export default TestInterceptor