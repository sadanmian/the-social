import React from 'react'
import "./friend.css"

export default function Friend({ user }) {
    return (
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src={user.profilePicture} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">
                    {user.username}
                </span>
            </div>
        </div>
    )
}
