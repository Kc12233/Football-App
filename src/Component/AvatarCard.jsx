import React from 'react'

const AvatarCard = ({url}) => {
  return (
      
         <div className="imgContainer__card__section">
         <img src={url} loading='lazy'/>  
         </div>
  )
}

export default AvatarCard