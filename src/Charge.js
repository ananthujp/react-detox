import React, {useEffect, useState} from "react"
import "./Charge.css"
import db from "./firebase.js"
import {useStateValue} from "./StateProvider"
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

function Charge(props) {
    const [{user}, dispatch]=useStateValue();
    const [Count,setCount]=useState(0);
    const [Charged,setCharged]=useState({state: false,id : 0});
    const handleCharge =(e) => {
        //countCharge();
        if(Charged.state){
            db.collection('posts').doc(props.key_id).collection('charge').doc(Charged.id).delete();
            setCharged({state: false,id: 0});
            countCharge();
        } 
        else {
             db.collection('posts').doc(props.key_id).collection('charge').add({ id: user.displayName, value: 50 });
             countCharge();
        }
      }
    const countCharge =(e) => {
        db.collection('posts').doc(props.key_id).collection('charge').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                setCount(snapshot.docs.length);
                if(doc.data().id==user.displayName){
                    setCharged({state: true,id: doc.id});
                }
            })
        })
    }
    useEffect(() => {
        countCharge();
      }, []);
    return(
        <div onLoad={countCharge} className="post_option" onClick={handleCharge} style={{color : (Charged.state)? "cyan" : "white"}}>
            <OfflineBoltIcon />
            <p>Charge ({Count})</p>
          </div>
    )

}
export default Charge;