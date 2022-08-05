import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons' 
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";

const LoginPage = () => {
    const [signInWithGoogle, _userGg, _loadingGg, _errorGg] = useSignInWithGoogle(auth);
    const [signInWithFacebook, _userFb, _loadingFb, _errorFb] = useSignInWithFacebook(auth);

    const handleFbLogin = () => {
        signInWithFacebook()
    }   

    const handleGgLogin = () => {
        signInWithGoogle()
    }
  
    return(
        <div className="login">
            <div className="login-header">
                <h4>welcome to</h4>
                <h1>cammy space</h1>
                <p>. . . where you can belong to a school club, a gaming group, or a worldwide art community. A place that makes it easy to talk every day and hang out more often.</p>
            </div>
            <div className="login-main">
                <img className="logo" src={require('../../assets/images/logo.png')} alt="cammy" />
                <h5>Yo! Welcome 👋</h5>
                <button className="btn btn-google" onClick={handleGgLogin}>
                    <FontAwesomeIcon icon={faFacebook} />
                    <span>Login with Google</span>
                </button>
                <button className="btn btn-facebook" onClick={handleFbLogin}>
                    <FontAwesomeIcon icon={faGoogle} />
                    <span>Login with Facebook</span>
                </button>
            </div>

        </div>
    )
}

export default LoginPage