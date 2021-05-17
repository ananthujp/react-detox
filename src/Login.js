import React from "react"
import "./elements/Login.css"
import Button from '@material-ui/core/Button';
import { auth, provider} from "./firebase.js"
import {actionTypes} from "./reducer.js"
import { useStateValue} from "./StateProvider.js"
function Login() {
    const [state, dispatch]= useStateValue();
    const signIn = () => {
        //sign in..
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                
            })
            .catch((error) => alert(error.message));
    };
    return(
        <div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>

    )
}

export default Login