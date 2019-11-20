import React from "react";
import { db } from "../../firebase";

const CreateShop = () => {
  const createShop = () => {
    db.collection("shops")
      .doc("Sofia")
      .set({
        name: "Habibi",
        location: "Studentski grad",
        rating: 2,
        submitedRatings: 1
      })
      .then(() => {
        console.log("Shop created successfully");
      })
      .catch(error => {
        console.log("Error creating shop", error);
      });
  };
  return <div></div>;
};

export default CreateShop;
