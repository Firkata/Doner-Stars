import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import ShopCard from "../ShopCard";
import { Grid, Button } from "tabler-react";

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

  const searchShop = () => {
    setSearchTerm("Aladin Foods");
  };

  useEffect(() => {
    fetchShops();
  }, []);

  return (
    <div>
      <div>
        {/* <input onChange={e => searchShop(e)} placeholder=" Search shop..." /> */}
        <Button onClick={() => searchShop()}>Search</Button>
      </div>
      <Grid.Row>
        {shops
          .filter(shop => (searchTerm ? shop.name === searchTerm : true))
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
              />
            </Grid.Col>
          ))}
      </Grid.Row>
    </div>
  );
};

export default ShopList;
