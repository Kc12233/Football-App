import React from 'react'
import axios from "axios"
import { useAuth } from '../useContext/UseContext'
import { Cone, User } from 'lucide-react'
import { RefreshTheToken } from '../RefreshToken/RefrshTokenL'
import { useEffect } from 'react'
import axiosClient from '../axios/endPoint'
import { useNavigate } from 'react-router-dom'
const TestRequest = () => {
   const { Username, id, img, dispatch } = useAuth()
   const Nav = useNavigate()


   const HandelDisplayUser = async () => {


      try {
         const data = await axiosClient.post("/test", {}, { withCredentials: true })


         console.log(data.data.message)

      } catch (err) {
         if (err.response.data.message == "Invalid or expired token") {

            const r = await RefreshTheToken()
            console.log(r, "gff")
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

               if (r?.message == "Your Refresh Token End up You should login " || r?.message == "missing id" || r?.message === "we dont found you") {
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
      <>


         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <h1>Welcome</h1> <h1 style={{ color: "red" }}> {Username} </h1>
            <h1>Id</h1><h1 style={{ color: "green" }}> {id}</h1>
            <img src={img} style={{ width: "70px", height: "70px", borderRadius: "100%" }} />

         </div>


         <button


            onClick={() => HandelDisplayUser()}
            style={{

               width: "250px",
               height: "40px",
               borderRadius: "20px",
               position: "absolute",
               top: "50%"
               ,
               left: "50%",
               transform: "translate(-50%,-50%)"


            }} >Ask for Request</button>

         <button onClick={() => console.log(id, "ID")}>Sow me id</button>

      </>
   )
}

export default TestRequest