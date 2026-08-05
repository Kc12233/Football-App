import React, { useEffect, useState } from 'react'
import "./scores.css"
import CardInfo from "../Component/CardInfo.jsx"
import FinshedMatches  from "../Component/FinshedMatches.jsx"
import axios from "axios"
import  use from "react"
import { Cone, Plus, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../useContext/UseContext.jsx'
const Scores = () => {
 const [card,SetCard] = useState([

    {
    id: 1,
    title: "Big summer transfers confirmed today",
    category: "TRANSFER",
    time: "2h ago",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
  },
  {
    id: 2,
    title: "City wins in the last minute!",
    category: "CHAMPIONS LEAGUE",
    time: "5h ago",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
  },
  {
    id: 3,
    title: "Controversial goal sparks debate",
    category: "VAR DECISION",
    time: "1d ago",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
  },


  
 ])
 const [TheirNews , SetTheirNews] =  useState(false)
 const [count,seetCount] = useState(33)

 const [off,Setoff] = useState(false)

 const Nav = useNavigate()

 
    const {Username , id ,img , dispatch}  =  useAuth()  
    
    useEffect(()=>{
      if(Username && id && img){
        console.log(Username , id , img)
      }

      console.log("hey this Component Mount")
    },[])

    


    
  return (

      <> 
                
  
     <div className="Container">

      <div className="navbar">


        <div className="logo-content-container">
          <div className="avatar-logo">
           <img src="/navbaricon/Koura.png"  alt="Ghaith"/>  
          </div>
  
          <h1 onClick={()=>console.log(Username , id )}>Koura</h1>
        </div>



        <div className="info-content-container">
          <div className="search">
            <img src="/myTeamIcon/search.svg"/>
          </div>


          <div className="notifaction">
                <span className="popup"></span>
                <img src="/myTeamIcon/notifaction.svg"/>
          </div>

          <div className="avatar-user">
          <span className="popup2"></span>

            <img src={img ? img : "/testpic/man2."}/>
              

          </div>
        </div>

      </div>

      <div className="watchScreen">

        <img src="/testpic/bbg.png" loading="lazy" />
          {
            TheirNews?   
              <>
              <div className="breaknews"><h1>News</h1></div>
                <p className="description2"> wey koul we7d ijib 500 zeyda  </p>  
              
              </>
           

             
             
             :  <p className="description">Welcome back ,{Username&& Username} 👋  </p> 
          }
         
          <h1 className="description-mem">Play football.</h1>
          <div className="description-mem2">
          <h1 className="first-desc">Make</h1>
          <h1 className="seconde-one">memories.</h1>
        </div>

        <div className="viewAll">
          <span>view all</span>
         <img src="/myTeamIcon/view2.svg" loading="lazy"/>

        </div>

      <div className="info-koura">
           <h1>Incoming Matches</h1>
           <small className="small"></small>
           <span>2 upcoming</span>

        </div>
        
        
      </div>

 
     <div className="viewAllList">
      
       <CardInfo teamFull = {false}/>
       <CardInfo teamFull = {false}/>
       <CardInfo teamFull = {true}/>

      
      </div>  



    <div className="FinshedMatches">
      <div className="left">
        <h1>Finished Matches</h1>
      </div>
          
         <div className="right">
          
         <img src="/myTeamIcon/view1.svg" loading="lazy"/>
         </div>

        
    </div>

  
  <div className="Banner-Finsih">
            <FinshedMatches/>
            <FinshedMatches/>
            <FinshedMatches/>
            <FinshedMatches/>
            <FinshedMatches/>
  </div>



 {/* <div className="FinshedMatches">
      <div className="left">
        <h1>Football news</h1>
      </div>
          
         <div className="right">
           <span>view all</span>
         <img src="/myTeamIcon/view1.svg" loading="lazy"/>
         </div>

          <img src='/navbaricon/Koura.png'/>
           
 </div> */}

 
      
      
 <div className="Section-cards">

 
    <div className="news_card"> 
      
         <div className="left_news_cards">
          <img src='/Memories/b.jpg'/>
         </div>

          <div className="right_news_cards">
              

             <div className="leftnew_card__">
              <h1>Goals</h1>
              
              <div className='spnumber'>4</div>
             </div>


             <div className="middle_news_card__"></div>

             <div className="right_news_cards__">

              <h1>Likes</h1>
              <div className="info_button_likes">
               <h1>{count}</h1>
               <img src='/myTeamIcon/heart.svg' onClick={()=>seetCount((prev)=>prev+10)}/>
              </div>
             </div>



    

          </div>  



 
    </div>
 

 


  
 
 
 </div>




<div className="container-card-choise">

{
  off  &&

  

  <div className="container-starts">
  <div id="stars"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>
  <div></div>
</div>


}






  <div
  
 onClick={()=>Nav("/CreateMatche")}
  className={`first_box_1 bounce ${off && 'disable'}`}>
    <h1>Match</h1>
    <img src='/myTeamIcon/blueCreate.svg'/>
    
  </div>

  <div onClick={()=>Nav("/FinshedMatchComp")} className={`first_box_2 bounce  ${off && 'disable'}`}>
    <h1>Finshed</h1>
      <img src='/myTeamIcon/plus.svg'/>
  </div>

  <div className="plus_containr_i" onClick={()=>Setoff((prev)=>!prev)}>
    <Plus size={20}/>
  </div>
</div>





     </div>

     

      </>
   
  )
}

export default Scores