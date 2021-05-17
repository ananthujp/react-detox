import React, {useState,useEffect} from "react";
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import "./elements/Post.css";
import Charge from "./Charge.js"
import ShareIcon from '@material-ui/icons/Share';
import db from "./firebase.js"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import {useStateValue} from "./StateProvider"
import Comment from "./Comment.js"

function Post(props) {
  const [{user}, dispatch]=useStateValue();
  const [comment,setComment]=useState(false);
  const [commentCount,setCommentcount]=useState("0");
  const handleHide =(e) => {
    db.collection('posts').doc(props.key_id).delete();
  }
  const commentON =(e) => {
    comment? setComment(false) : setComment(true);
  }
  const countComment =(e) => {
    db.collection('posts').doc(props.key_id).collection('comment').get().then(snapshot => {
      setCommentcount(snapshot.docs.length);
    })
  }
  useEffect(() => {
    countComment();
  })
  return (
    <div>
      <div className="post__o">
        <div className="post___o__head">
          <Avatar src={props.Prof__pic} className="post__avatar"/>
          <div className="post___o__headInfo">
            <h3>{props.User__id}</h3>
            {<p>{new Date(props.time__stamp?.toDate()).toUTCString()}</p>}
          </div>
          {(props.User__id==user.displayName) ? <CloseIcon onClick={handleHide} className="hide__btn"/> : <div></div>}
        </div>
        <div className="post__o__content">{props.text__content}</div>
        <div className="post__Image">
          {(props.image!="")?<img src={props.image} alt='' className="post__Image"/>:<></>}
        </div>
        <div className="post__options">
          <Charge key_id={props.key_id}/>
          <div className="post__option" onClick={commentON}>
            <ChatBubbleOutlineIcon />
            <p>Comment ({commentCount})</p>
          </div>
          <div className="post__option">
            <ShareIcon />
            <p>Share</p>
          </div>
        </div>
        <div>{comment?<Comment key_id={props.key_id}/>:""}</div>
      </div>
    </div>
  );
}

export default Post;
