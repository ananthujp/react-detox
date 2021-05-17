import React from 'react'
import "./UserInfo.css"
import {Avatar } from '@material-ui/core';
function UserInfo({name,img,email}) {
    return (
        <div className="userInfo">
            <Avatar src={img} className="avatar" onClick={()=>auth.signOut()}/>
                <div className="sidebar__profileInfo">
                    <h3>@{name}</h3>
                    <p>#{email.split("@")[0]}</p>
                </div>
        </div>
    )
}

export default UserInfo

