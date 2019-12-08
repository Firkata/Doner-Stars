import React, { useState, useEffect } from "react";
import Facebook from "./components/Facebook/Facebook";
import ShopList from "./components/ShopList/ShopList";
import { Route, Switch, Redirect } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import "tabler-react/dist/Tabler.css";
import "./App.css";
import Authorized from "./components/Authorized";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      // console.log("user", !!user);
    });
  });

  return (
    <div className="App">
      {isSignedIn ? (
        <Authorized />
      ) : (
        <header className="App-header">
          <h2>Welcome to Doner Stars</h2>
          <p>Join the Ranking of the best Doners in Sofia</p>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </header>
      )}
    </div>
  );
};

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
