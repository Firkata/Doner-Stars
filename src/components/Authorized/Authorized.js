import React from "react";
import firebase from "firebase";
import { Grid, Card, Button } from "tabler-react";
import ShopList from "../ShopList";
import AccountWidget from "../AccountWidget";
import styles from "./Authorized.module.css";

const Authorized = () => {
  return (
    <div>
      <AccountWidget />
      <ShopList />
    </div>
  );
};

export default Authorized;
