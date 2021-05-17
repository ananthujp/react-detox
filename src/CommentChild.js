import React from "react"
import CloseIcon from '@material-ui/icons/Close';
import "./CommentChild.css"
import { Avatar } from "@material-ui/core"
import {useStateValue} from "./StateProvider"
import db from "./firebase.js"
import firebase from "firebase"
function CommentChild(props){
    const [{user}, dispatch]=useStateValue();
    const commentHide =(e) => {
        db.collection('posts').doc(props.key_id).collection('comment').doc(props.comment_id).delete();
      }
    return(
        <div className="comment_wrap"> 
            
            <Avatar src={props.pic} className='avatar'/>
            <h3>{props.name} : </h3>
            <p>{props.content} </p>
            {(props.name==user.displayName) ? <CloseIcon onClick={commentHide} className="hide__btn"/> : <div></div>}
        </div>
        
    );
}
export default CommentChild;