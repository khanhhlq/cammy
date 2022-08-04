import React from "react";
import './LoginPage.css';

const LoginPage = () => {

    return(
        <div className="login">
            <div className="login-header">
                <h4>welcome to</h4>
                <h1>cammy space</h1>
                <p>Unlock your English skills with Study Space, a fun and helpful community to learn English with your friends.</p>
            </div>
            <div className="login-main">
                <img className="logo" src={require('../../assets/images/logo.png')} alt="cammy" />
                <h4>welcome!</h4>
                <form>
                    <input 
                        type="text" 
                        placeholder="Email Address" 
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                    />
                    <button className="btn btn-login">Log in</button>
                    {/* <button className="btn btn-google">Google</button> */}
                </form>
                <p className="nav">
                    <p>Register</p>
                    <span>|</span>
                    <p>Lost your password?</p> 
                </p>
            </div>
        </div>
    )
}

export default LoginPage