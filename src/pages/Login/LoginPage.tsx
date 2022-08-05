import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons' 
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
                <h5>welcome!</h5>
                <button className="btn btn-google">
                    <FontAwesomeIcon icon={faFacebook} />
                    <span>Login with Google</span>
                </button>
                <button className="btn btn-facebook">
                    <FontAwesomeIcon icon={faGoogle} />
                    <span>Login with Facebook</span>
                </button>
            </div>
        </div>
    )
}

export default LoginPage