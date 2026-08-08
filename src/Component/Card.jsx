import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'
import { JoystickIcon } from 'lucide-react'
import AvatarCard from './AvatarCard'
const Card = () => {
  const Nav = useNavigate()
  const HandelJoin = ()=>{Nav("/home")}
  // if he live the session discoennect the connection and the open the connection
  //  haha that erorr when he get error not send the request again when he refreh the toke
  return (
    <div className='Card'>

        <div className="winsfloat">
          <img src='/myteamPics/svgicon/king.svg'/>
        </div>

        <div className="__logo_pictuer">
          <div className="logoBg">
            <img src='/myteamPics/Badge/Python.png' alt='w'/>
          </div>
        </div>
        <div className="__card_name_team">
           <h1>Power Team</h1>
        </div>
        <div className="__card_little_name">
          <h2>Legend Team</h2>
        </div>

        
        <div className="__card__img__sesctions">
          <AvatarCard url={'/Memories/IMG_6190.jpg'}/>
          <AvatarCard url={'/Memories/IMG_6190.jpg'}/>
          <AvatarCard url={'/Memories/IMG_6190.jpg'}/>
          <AvatarCard url={'/Memories/IMG_6190.jpg'}/>
      

         
         <div className="imgContainer__card__section">
          <h1>+6</h1>
         </div>



         
        </div>
        
        <div className="trophy__card__section">

          <div className="first__trophy_blok">
            <img src='/myteamPics/svgicon/cup.svg'/>
            <h1>152</h1>
          </div>
          <div className="first__trophy_blok">
            <img src='/myteamPics/svgicon/start.svg'/>
            <h1>4.8</h1>
          </div>
          <div className="first__trophy_blok">
            <img src='/myteamPics/svgicon/community-.svg'/>
            <h1>43</h1>
          </div>

         
        </div>

        <div className="__button_workingon">
          <button>Join</button>
          <div className="divOption">
            <img src='/myteamPics/svgicon/option.svg'/>
          </div>
        </div>
 

    </div>
  )
}

export default Card