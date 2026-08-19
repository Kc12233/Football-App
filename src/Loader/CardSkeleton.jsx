import React from 'react'
import "./cardSekleton.css"
const CardSkeleton = () => {
  return (
    <>
    <div className="__rooms">
    <div className="room-card skeleton-card">
    
        <div className="skeleton skeleton-image"></div>

    
        <div className="skeleton skeleton-title"></div>

    
        <div className="skeleton skeleton-team"></div>

    
        <div className="skeleton-avatars">
        <div className="skeleton skeleton-avatar"></div>
        <div className="skeleton skeleton-avatar"></div>
        <div className="skeleton skeleton-avatar"></div>
        </div>

    
        <div className="skeleton-stats">
        <div className="skeleton skeleton-stat"></div>
        <div className="skeleton skeleton-stat"></div>
        <div className="skeleton skeleton-stat"></div>
        </div>
        
        <div className="skeleton skeleton-button"></div>
    </div>
    </div>


    
    </>
    
  )
}

export default CardSkeleton