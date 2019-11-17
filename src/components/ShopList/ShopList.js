import React from 'react';
import { Card, Button } from "tabler-react";
import {db} from '../../firebase';

const ShopList = () => {
    const fetchShops = () => {
        // shopsRef.on("value", snapshot => {
        //     let shops = snapshot.val;
        // })
        db.collection("shops")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            return console.log(data);
        })
    }

    // const createShop = () => {
    //     db.collection("shops").doc("Sofia").set({
    //         name: "Habibi",
    //         location: "Studentski grad",
    //         rating: 2,
    //         submitedRatings: 1
    //     })
    //     .then(() => {console.log("Shop created successfully")})
    //     .catch((error) => {console.log("Error creating shop", error)})
    // }

    return (
    <div>
        <button onClick={() => fetchShops()}>Shops</button>
        <Card />
    </div>
    );
}

export default ShopList;