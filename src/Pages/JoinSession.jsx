import React from "react";
import "./JoinSession.css";
import { Hash, ArrowRight, LoaderCircle, Send } from "lucide-react";
import { useState } from "react";

const JoinSession = () => {
  const [state,setState]= useState({
    requestSent : true , 
    request_no_room : false ,
    request_conflit : false
  })
  return (
     <>

    <div className="container_join_session">
      <div className="containerSession">

        <div className="join_header">
          <div className="icon_circle">
            <Hash size={28} />
          </div>

          <h1>Join Session</h1>

          <p>
            Enter the invitation code to join your football session.
          </p>
        </div>

        <div className="join_input">
          <input
            type="text"
            placeholder="Enter Session Code"
          />

          <button>
            Join
            <ArrowRight size={18} />
             
          </button>
         {state.requestSent &&  <div  className="green_rquest" ><h3>request sent to room ..</h3> <Send size={14}/>  </div> }
         {state.request_no_room &&   <div  className="red_rquest" ><h3>room not  exist</h3>    </div> }
         {state.request_conflit &&     <div  className="red_rquest_conflit" ><h3>you already Member</h3>   </div> }
          
         
        
        </div>

      </div>
    </div>

   
    
    </>
  );
};

export default JoinSession;