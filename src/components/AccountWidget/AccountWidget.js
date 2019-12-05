import React from 'react';
import firebase from "firebase";
import { Grid, Card, Button } from "tabler-react";
import styles from './AccountWidget.module.css';

const AccountWidget = () => {
    return (
        <Grid.Row className={`mt-4 mr-4 d-flex justify-content-end align-items-center`}>
            <img alt="profile_pic" className={styles.ProfileImage} src={firebase.auth().currentUser.photoURL} />
            <h4 className="mt-3 mx-4">{firebase.auth().currentUser.displayName}</h4>
            <Button className={styles.SignOutButton} onClick={() => firebase.auth().signOut()}>Sign out</Button>
        </Grid.Row>
    );
}

export default AccountWidget; 