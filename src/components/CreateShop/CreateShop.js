import React from "react";
import firebase from "firebase";
import { db } from "../../firebase";

const CreateShop = () => {
  const createShop = () => {
    db.collection("donerShops")
      .doc("Sofia123")
      .set({
        averageRating: 5,
        location: "Studentski grad",
        name: "Habibi",
        rating: {
          oneStar: 0,
          twoStars: 0,
          threeStars: 0,
          fourStars: 0,
          fiveStars: 1
        },
        users: [{ rating: 5, userId: firebase.auth().currentUser.uid }]
      })
      .then(() => {
        console.log("Shop created successfully");
      })
      .catch(error => {
        console.log("Error creating shop", error);
      });
  };
  return <button onClick={() => createShop()}>+</button>;
};

export default CreateShop;
