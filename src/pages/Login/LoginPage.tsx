import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons' 
import firebase, { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from '../../firebase/service';


const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const LoginPage = () => {
    const handleLogin = async (provider:any) => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
        
        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user?.displayName,
                email: user?.email,
                photoURL: user?.photoURL,
                uid: user?.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user?.displayName)
            })
        }
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
                <button className="btn btn-google" onClick={() => handleLogin(googleProvider)}>
                    <FontAwesomeIcon icon={faFacebook} />
                    <span>Login with Google</span>
                </button>
                <button className="btn btn-facebook" onClick={() => handleLogin(fbProvider)}>
                    <FontAwesomeIcon icon={faGoogle} />
                    <span>Login with Facebook</span>
                </button>
            </div>

        </div>
    )
}

export default LoginPage