import { Avatar } from "@material-ui/core"
import React, {useState} from   "react"
import db from "./firebase.js"
import firebase from "firebase"
import {useStateValue} from "./StateProvider"
import "./MessageSend.css"
function MessageSend() {
    const [{user}, dispatch]=useStateValue();
    const [input,setinput] = useState('')
    const [imageURL,setimageURL] = useState('')
    const handleSubmit =(e) => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username:user.displayName,
            image: imageURL,
        });
        setinput("");
        setimageURL("");
    }
    return(
    <div className="msg__wrap">
        <div className="wrap__top">
            <Avatar src={user.photoURL}/>
            <form>
                <input 
                    value={input}
                    onChange= {(e) => setinput(e.target.value)}
                    className="sender_Input" placeholder={'Hi '+user.displayName.split(' ')[0] + ', Say something.!'} />
                <input 
                    value={imageURL}
                    onChange= {(e) => setimageURL(e.target.value)}
                    placeholder={'Image URL'} />
                <button onClick={handleSubmit} type="submit">Hidden submit</button>
            </form>
        </div>
    </div>
    );
}
export default MessageSend;