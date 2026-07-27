import React from 'react'
import "./HomeScore.css"
import { NavLink, Outlet } from 'react-router-dom'

const HomeScore = () => {
    const HandelVibrate = ()=>{
        navigator.vibrate(100)
    }
    return (

        <>



            <div className='switch-bar' >

                <div className="content-icon">
               
                   
                    <NavLink 
                    to="Scores"
                    className={({ isActive }) =>
                        isActive ? "active-link" : "normal-link"
                    }
                    
                    >
                     <img onClick={()=>HandelVibrate()} src='/myTeamIcon/homee.svg' />
                         
                     </NavLink>


                      <span   >Home</span>



                </div>


                <div className="content-icon">
                  



                     <NavLink 
                    to="news"
                    className={({ isActive }) =>
                        isActive ? "active-link" : "normal-link"
                    }
                    
                    >
                       <img  onClick={()=>HandelVibrate()} src='/pictuerSwitchBar/social.svg' />
                         
                     </NavLink>





                    <span>news</span>
                </div>











                <div className="content-icon">
                  
                 

                      <NavLink 
                        to="shorts"
                        className={({ isActive }) =>
                            isActive ? "active-link" : "normal-link"
                        }
                    
                    >
                   <img onClick={()=>HandelVibrate()}  src='/myTeamIcon/shorts.png' />

                
                         
                    </NavLink>
                     <span>shorts</span>


                </div>

                <div className="content-icon">

                    
                      <NavLink 
                        to="profile"
                        className={({ isActive }) =>
                            isActive ? "active-link" : "normal-link"
                        }
                    
                    >
                    <img  onClick={()=>HandelVibrate()}  src='/myTeamIcon/user__profile.svg' />
                
                         
                    </NavLink>




                  
                    <span>Profile</span>
                </div>
            </div>


            <Outlet />


        </>



    )
}

export default HomeScore