import React,{useState,useEffect} from "react"
import "./Feed.css"
import Post from "./Post.js"
import db from "./firebase.js"
import MessageSend from "./MessageSend";
function Feed(){
  const [posts,setPosts]=useState([]);
  useEffect(() => {
    db.collection('posts')
    .orderBy("timestamp","desc")
    .onSnapshot(snapshot =>(
      setPosts(snapshot.docs.map(doc=>({id: doc.id,data: doc.data() })))
    ))
  },[])
  return(
    <div className="feed__container">
    <p>Feed</p>
    <MessageSend/>
    {posts.map(post => (
      <Post key={post.id} key_id={post.id} Prof__pic={post.data.profilePic}
      image={post.data.image}
      User__id={post.data.username}
      time__stamp={post.data.timestamp}
      text__content={post.data.message}
      />
    ))}
    </div>
  );
}

export default Feed;