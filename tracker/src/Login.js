import React from 'react';
import './Login.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
//import { config } from "./test-credentials";
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/Home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};
function SignInScreen() {
  return (
    <div>
      <h1>Please Sign-In:</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
export default function Login() {
  
  return(
    <h2> <img src="https://plextech-berkeley-edu.apphost.ocf.berkeley.edu/images/PTlogo.png" alt="PT logo"></img>
    <header>
      Full-Stack Curriculum Login
      <SignInScreen/>
    </header>
    </h2>
  );
}
