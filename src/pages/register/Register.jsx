import React from 'react'
import "./register.css"

export default function Register() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TheSocial</h3>
                    <span className="loginDesc">TheSocial helps you connect and share with the people in your life.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Username' type="Text" className="loginInput" />
                        <input placeholder='Email address' type="Email" className="loginInput" />
                        <input placeholder='Password' type="password" className="loginInput" name="" id="" />
                        <input placeholder='Confirm Password' type="password" className="loginInput" name="" id="" />
                        <button className="loginButton">Sign Up</button>

                        <button className="loginRegisterButton">Log Into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
