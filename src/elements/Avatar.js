import React from "react"
import "./Avatar.css"
function Avatar(prop){
  return(
    <img className="ico" src={prop.path}/>
  );
}

export default Avatar;