import React,{useState,useEffect} from "react"
import { Avatar } from "@material-ui/core"
import "./Comment.css"
import db from "./firebase.js"
import firebase from "firebase"
import {useStateValue} from "./StateProvider"
import CommentChild from "./CommentChild.js"
function Comment(props){
    const [inputComment,setCommentinput] = useState('')
    const [{user}, dispatch]=useStateValue();
    const [comments,setComment]=useState([]);
    useEffect(() => {
        db.collection('posts').doc(props.key_id).collection('comment')
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot =>(
        setComment(snapshot.docs.map(doc=>({id: doc.id,data: doc.data() })))
        ))
    },[])
    
    const commentSubmit =(e) => {
        e.preventDefault();
        db.collection('posts').doc(props.key_id).collection('comment').add({
            message: inputComment,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username:user.displayName,
        });
        setCommentinput("");
    }
    return(
        <div>
            <div className="comment__wrap">
                <div className="comment_wrap__top">
                <Avatar src={user.photoURL}/>
                    <form>
                        <input 
                            value={inputComment}
                            onChange= {(e) => setCommentinput(e.target.value)}
                            className="commment_Input" placeholder={'Hi '+user.displayName.split(' ')[0] + ', What do you think about this post.?'} />
                        <button onClick={commentSubmit} type="submit">Hidden submit</button>
                    </form>
                </div>
            </div>
            {comments.map(comment => (
                <CommentChild
                    key={comment.id}
                    pic={comment.data.profilePic}
                    name={comment.data.username}
                    content={comment.data.message}
                    key_id={props.key_id}
                    comment_id={comment.id}/>
            ))}
            
        </div>
    );
}

export default Comment;