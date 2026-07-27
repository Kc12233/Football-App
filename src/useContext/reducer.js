const Action  = {
    ADD_ID_TO_THE_STATE  : "ADD_ID",
   
}
export function reducer(state,action ){
     
      
     switch (action.type) {

        case Action.ADD_ID_TO_THE_STATE:
        return {...state,id : action.payload.id , UserName  : action.payload.UserName , img : action.payload.img}
    
     
    
    default:
      return state;
  }


}