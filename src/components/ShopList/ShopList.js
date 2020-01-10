import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import ShopCard from "../ShopCard";
import { Grid } from "tabler-react";

const ShopList = () => {
  const [shops, setShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const searchShop = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetchShops();
  }, []);

  return (
    <div>
      <input onChange={e => searchShop(e)} placeholder=" Search shop..." />

      <Grid.Row>
        {shops
          .filter(shop => {
            return shop.name.toLowerCase().startsWith(searchTerm);
          })
          .map(shop => (
            <Grid.Col key={shop.id} lg={4}>
              <ShopCard
                id={shop.id}
                name={shop.name}
                location={shop.location}
                latitude={shop.latitude}
                longitude={shop.longitude}
                bestsauce={shop.bestsauce}
                bigdoner={shop.bigdoner}
                rating={shop.rating}
                averageRating={shop.averageRating}
                fetch={fetchShops}
                users={shop.users}
                workDays={shop.workDays}
                workHours={shop.workHours}
              />
            </Grid.Col>
          ))}
      </Grid.Row>
    </div>
  );
};

export default ShopList;
