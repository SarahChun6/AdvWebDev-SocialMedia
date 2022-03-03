import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import { GoogleAuthProvider } from "firebase/auth";
import './login.css'

const Login = () => {


    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
    }

    return(
        <>
            <button onClick={handleLogin}>Login with Google</button>
        </>
    )
}
export default Login