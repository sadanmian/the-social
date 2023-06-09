import React from 'react'
import "./login.css"

export default function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TheSocial</h3>
                    <span className="loginDesc">TheSocial helps you connect and share with the people in your life.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Email' type="Email" className="loginInput" />
                        <input placeholder='Password' type="password" className="loginInput" name="" id="" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
