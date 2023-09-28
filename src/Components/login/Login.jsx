import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [ user, setUser] = useState(null)

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
// console.log(app)
    const handleGoogleSignIn = ()=>{
      
    signInWithPopup(auth, provider)
    .then(reuslt => {
        const loggedInUser = reuslt.user;
        // console.log(loggedInUser)
        setUser(loggedInUser)
    })
    .catch( error => {
        console.log('error', error.message)
    })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then( result => {
            console.log(result);
            setUser(null)
        })
        .catch(error =>{
            console.log(error);
        })
    }
  
    return (
        <div>
            {/* user ? logout : sign in */}

            {
                user ?  <button onClick={handleSignOut}>Sign Out</button> : 
                         <button onClick={handleGoogleSignIn}>Google Login</button>
            }
           
            
            {
            user &&  <div>
                <h3> user: {user?.displayName}</h3>
                <p>Email: {user?.email}</p>
                <img src={user?.photoURL} alt="" />

            </div>
           }
        </div>
    );
};

export default Login;