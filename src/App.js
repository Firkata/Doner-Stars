import React, { useState, useEffect } from "react";
import Facebook from "./components/Facebook/Facebook";
import ShopList from "./components/ShopList/ShopList";
import { Route, Switch, Redirect } from 'react-router-dom';
import { QueryParamProvider } from "use-query-params";
import firebase from 'firebase';
import {StyledFirebaseAuth} from 'react-firebaseui'
import "./App.css";

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
      // console.log("user", !!user);
    })
  })

  return (
    <div className="App">
      {isSignedIn ? (
      <div>
        <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
        <img alt="profile_pic" src={firebase.auth().currentUser.photoURL} />
        <ShopList />
      </div>
      ) : ( 
      <header className="App-header">
        <h2>Welcome to Doner Stars</h2>
        <p>Join the Ranking of the best Doners in Sofia</p>
        <StyledFirebaseAuth 
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}/>
      </header>
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
