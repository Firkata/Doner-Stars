import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import ShopCard from '../ShopCard/ShopCard';
import { Grid, Card, Button } from 'tabler-react';

const ShopList = () => {
  const [shops, setShops] = useState([]);

  const fetchShops = () => {
    db.collection("donerShops")
      .get()
      .then(querySnapshot => {
        let data = querySnapshot.docs.map(doc => doc.data());
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
                name={shop.name} 
                location={shop.location}
                rating={shop.rating}
                submitedRatings={shop.submittedRatings}
            />
        </Grid.Col>
        ))}
      </Grid.Row>
    </div>
  );
};

export default ShopList;
