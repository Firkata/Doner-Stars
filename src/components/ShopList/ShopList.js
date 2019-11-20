import React, { useState, useEffect } from "react";
import { Card, Button } from "tabler-react";
import { db } from "../../firebase";

const ShopList = () => {
  const [shops, setShops] = useState([]);

  const fetchShops = () => {
    // shopsRef.on("value", snapshot => {
    //     let shops = snapshot.val;
    // })
    db.collection("shops")
      .get()
      .then(querySnapshot => {
        let data = querySnapshot.docs.map(doc => doc.data());
        setShops(data);
        // return console.log(data);
      });
  };

  useEffect(() => {
    fetchShops();
  }, []);

  console.log(shops);
  return (
    <div>
      {/* <button onClick={() => fetchShops()}>Shops</button> */}
      {shops.map(shop => (
        <ul>
          <li>{shop}</li>
        </ul>
      ))}
      <Card />
    </div>
  );
};

export default ShopList;
