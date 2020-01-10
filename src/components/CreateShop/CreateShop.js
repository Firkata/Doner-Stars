import React from "react";
import firebase from "firebase";
import { db } from "../../firebase";

const CreateShop = () => {
  const createShop = () => {
    db.collection("donerShops")
      .doc("24GrillHouse")
      .set({
        averageRating: 4,
        bestsauce: 1,
        bigdoner: 1,
        latitude: 42.67449,
        location: "ul. Atanas Dalchev 16",
        longitude: 23.359457,
        name: "24 Grill Center",
        rating: {
          oneStar: 0,
          twoStars: 0,
          threeStars: 0,
          fourStars: 4,
          fiveStars: 0
        },
        users: [
          {
            rating: 4,
            userId: firebase.auth().currentUser.uid,
            votedoner: false,
            votesauce: false
          }
        ],
        workDays: "Monday - Friday",
        workHours: "7am - 10pm"
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
