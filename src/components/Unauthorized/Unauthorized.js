import React from 'react';
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import styles from './Unauthorized.module.css';

const Unauthorized = (uiConfig) => {
    return (
        <header className="App-header">
            <h2>Welcome to Doner Stars</h2>
            <p>Join the Ranking of the best Doners in Sofia</p>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </header>
    );
}

export default Unauthorized;