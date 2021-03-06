//import React from 'react';
import './Login.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react'; //testing 
import Home from './Home';
/*
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/Home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
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
    <h2> <img src="https://plextech-berkeley-edu.apphost.ocf.berkeley.edu/images/PTlogo.png" alt="PTlogo.png"></img>
      <h3>
        Full-Stack Curriculum Login
        <SignInScreen/>
      </h3>
    </h2>
  );
}
*/

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};
function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user && user.email.includes("@berkeley.edu")) {
        setIsSignedIn(true);
      }
      else{
        setIsSignedIn(false);
      }
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h2> <img src="https://plextech-berkeley-edu.apphost.ocf.berkeley.edu/images/PTlogo.png" alt="PTlogo.png"></img>
        </h2>
      <h3>
        Full-Stack Curriculum  </h3>
        <h1>Please Sign In</h1>
        <h4>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </h4>
      </div>
    );
  }
  return (
    <div>
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!
      <button className="sign-out" onClick={() => firebase.auth().signOut()}>Sign-out</button></p>
      <Home />
    </div>
  );
}

export default SignInScreen;