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
        <div className="login">
            <img alt="" src="https://cdn.dribbble.com/users/4504621/screenshots/15073881/media/2b9334b41f700d68fb02bac81484a374.jpg" />
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>

    )
}

export default Login