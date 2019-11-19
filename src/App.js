import React, { useState, useEffect } from "react";
import Facebook from "./components/Facebook/Facebook";
import ShopList from "./components/ShopList/ShopList";
import { Route, Switch, Redirect } from 'react-router-dom';
import { QueryParamProvider } from "use-query-params";
import firebase from 'firebase';
import {StyledFirebaseAuth} from 'react-firebaseui'
import "./App.css";

// firebase.initializeApp({
//   apiKey: "AIzaSyARpNNPyNbkTO3EUuKK_4E8PuHDuqjIJog",
//   authDomain: "doner-stars.firebaseapp.com"
// })

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      console.log("user", !!user);
    })
  })

  return (
    <div className="App">
      {isSignedIn ? (
      <div>
        <div>Singed In!</div>
        <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
        <img alt="profile_pic" src={firebase.auth().currentUser.photoURL} />
      </div>
      ) : ( 
      <StyledFirebaseAuth 
      uiConfig={uiConfig}
      firebaseAuth={firebase.auth()}/>
      )}
    </div>
  );
}

// const App = () => {
//   return (
//     <QueryParamProvider ReactRouterRoute={Route}>
//       <Switch>
//         <Route component={Facebook} exact path="/login" />
        
//       </Switch>
//     </QueryParamProvider>
//   );
// }

export default App;
