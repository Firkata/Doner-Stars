import React from "react";
import Facebook from "./components/Facebook/Facebook";
import ShopList from "./components/ShopList/ShopList";
import { Route, Switch, Redirect } from 'react-router-dom';
import { QueryParamProvider } from "use-query-params";
import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Welcome to Doner Stars</h2>
//         <p>Join the Ranking of the best Doners in Sofia</p>
//         <Facebook />
//         <ShopList />
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */}
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <QueryParamProvider ReactRouterRoute={Route}>
      <Switch>
        <Route component={Facebook} exact path="/login" />
        
      </Switch>
    </QueryParamProvider>
  );
}

export default App;
