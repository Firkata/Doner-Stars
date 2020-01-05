import React from "react";
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
