import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import ShopCard from '../ShopCard';
import { Grid, Card, Button } from 'tabler-react';

const ShopList = () => {
  const [shops, setShops] = useState([]);

  const fetchShops = () => {
    db.collection("donerShops")
      .get()
      .then(querySnapshot => {
        let data = querySnapshot.docs.map(doc => {
          let document = doc.data();
          document.id = doc.id;
          // console.log(document)
          return document;
        });
        // console.log(data)
        setShops(data);
      });
  };

  useEffect(() => {
    fetchShops();
  }, []);

  return (
    <div>
      <Grid.Row>
        {shops.map(shop => (
        <Grid.Col key={shop.name} lg={6}>
            <ShopCard 
                id={shop.id}
                name={shop.name} 
                location={shop.location}
                rating={shop.rating}
                submittedRatings={shop.submittedRatings}
            />
        </Grid.Col>
        ))}
      </Grid.Row>
    </div>
  );
};

export default ShopList;
