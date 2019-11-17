import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const Facebook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPicture, setUserPicture] = useState("");

  let fbContent;

  const componentClicked = () => {
    console.log("event");
  };

  const responseFacebook = response => {
    console.log(response);
    setIsLoggedIn(true);
    setUserID(response.userID);
    setUserName(response.name);
    setUserEmail(response.email);
    setUserPicture(response.picture.data.url);
  };

  if (isLoggedIn) {
    fbContent = (
      <div>
        <img src={userPicture} alt={userName}></img>
        <h2>Welcome {userName}</h2>
        Email:{userEmail}
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId="526219624867302"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }
  return <div>{fbContent}</div>;
};

export default Facebook;
