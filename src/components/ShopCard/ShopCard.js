import React, { useState } from "react";
import { db } from "../../firebase";
import firebase from "firebase";
import { Grid, Card } from "tabler-react";
import styles from "./ShopCard.module.css";
import CreateShop from "../CreateShop/CreateShop";
import ReactMapGL, { Marker } from "react-map-gl";
import SimpleModalLauncher from "../SimpleModalLauncher/SimpleModalLauncher";

const ShopCard = data => {
  const [viewport, setViewport] = useState({
    latitude: data.latitude,
    longitude: data.longitude,
    width: "50vw",
    height: "60vh",
    zoom: 16
  });

  const submitRating = (newRating, rating, newRatingNum) => {
    // debugger;
    let users = data.users;
    let currentUser = users.find(
      user => user.userId === firebase.auth().currentUser.uid
    );

    if (currentUser) {
      switch (currentUser.rating) {
        case 1:
          rating["oneStar"] = rating["oneStar"] - 1;
          break;
        case 2:
          rating["twoStars"] = rating["twoStars"] - 1;
          break;
        case 3:
          rating["threeStars"] = rating["threeStars"] - 1;
          break;
        case 4:
          rating["fourStars"] = rating["fourStars"] - 1;
          break;
        case 5:
          rating["fiveStars"] = rating["fiveStars"] - 1;
          break;
        default:
          break;
      }
      currentUser.rating = newRatingNum;
    }

    rating[newRating] = rating[newRating] + 1;
    let ratingSum =
      5 * rating["fiveStars"] +
      4 * rating["fourStars"] +
      3 * rating["threeStars"] +
      2 * rating["twoStars"] +
      1 * rating["oneStar"];
    let ratingCount =
      rating["fiveStars"] +
      rating["fourStars"] +
      rating["threeStars"] +
      rating["twoStars"] +
      rating["oneStar"];
    let avgRating = Math.round(ratingSum / ratingCount);
    console.log(avgRating);
    db.collection("donerShops")
      .doc(data.id)
      .update({
        rating: rating,
        averageRating: avgRating,
        users: [currentUser]
      })
      .then(() => {
        console.log("New rating added");
        data.fetch();
      })
      .catch(error => {
        console.log("Error adding rating", error);
      });
  };

  return (
    <Card className={styles.CardContainer}>
      <CreateShop />
      <p>
        <b>{data.name}</b>
      </p>
      <div>
        <img alt="Location" className="mb-3" src="/location.png" width="25px" />
        <b>{data.location}</b>

        <SimpleModalLauncher buttonLabel="Show on map">
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={
              "pk.eyJ1IjoiZmlya2F0YSIsImEiOiJjazR6eXg0MXEwYmZqM21uc3ZsZndlbnBjIn0.pxkqXlENUAR4sLN6d74I1w"
            }
            onViewportChange={viewport => {
              setViewport(viewport);
            }}
          >
            <Marker latitude={data.latitude} longitude={data.longitude}>
              <img alt="Location" src="/location.png" width="40px" />
            </Marker>
          </ReactMapGL>
        </SimpleModalLauncher>
      </div>
      <img alt="shop" src="/aladin_foods.jpeg" />
      <Grid.Row className={styles.RatingRow}>
        <Grid.Col lg="2.5">
          <img
            alt="star"
            className={styles.Star}
            onClick={() => submitRating("oneStar", data.rating, 1)}
            src="/gold_star-512.png"
          />
        </Grid.Col>

        <Grid.Col lg="2.5">
          <img
            alt="s"
            className={data.averageRating > 1 ? styles.Star : styles.StarDim}
            onClick={() => submitRating("twoStars", data.rating, 2)}
            src="/gold_star-512.png"
          />
        </Grid.Col>
        <Grid.Col lg="2.5">
          <img
            alt="s"
            className={data.averageRating > 2 ? styles.Star : styles.StarDim}
            onClick={() => submitRating("threeStars", data.rating, 3)}
            src="/gold_star-512.png"
          />
        </Grid.Col>
        <Grid.Col lg="2.5">
          <img
            alt="s"
            className={data.averageRating > 3 ? styles.Star : styles.StarDim}
            onClick={() => submitRating("fourStars", data.rating, 4)}
            src="/gold_star-512.png"
          />
        </Grid.Col>
        <Grid.Col lg="2.5">
          <img
            alt="s"
            className={data.averageRating > 4 ? styles.Star : styles.StarDim}
            onClick={() => submitRating("fiveStars", data.rating, 5)}
            src="/gold_star-512.png"
          />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col>
          <img
            alt="Big Doner"
            className="mt-3"
            src="/big_doner.jpg"
            width="130px"
          />
          <p>
            <b>5</b>
          </p>
        </Grid.Col>
        <Grid.Col></Grid.Col>
        <Grid.Col>
          <img
            alt="Best Sauce"
            className="mt-3"
            src="/best_sauce.png"
            width="35px"
          />
          <p>
            <b>7</b>
          </p>
        </Grid.Col>
      </Grid.Row>
    </Card>
  );
};

export default ShopCard;
