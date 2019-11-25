import React from "react";
import { db } from "../../firebase";
import { Grid, Card, Button } from "tabler-react";
import styles from "./ShopCard.module.css";

const ShopCard = data => {
  const submitRating = (newRating, rating) => {
    rating[newRating] = rating[newRating] + 1;
    let ratingSum = (5*rating["fiveStars"] + 4*rating["fourStars"] + 3*rating["threeStars"] + 2*rating["twoStars"] + 1*rating["oneStar"]);
    let ratingCount = (rating["fiveStars"] + rating["fourStars"] + rating["threeStars"] +rating["twoStars"] +rating["oneStar"]);
    let avgRating = Math.round(ratingSum / ratingCount);

    db.collection("donerShops")
      .doc(data.id)
      .update({
        rating: rating,
        averageRating: avgRating
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
      <p>{data.name}</p>
      <p>{data.location}</p>
      <p>{data.averageRating}</p>
      <Grid.Row className={styles.RatingRow}>
        <Grid.Col lg="2.5">
          <button
            onClick={() => submitRating("oneStar", data.rating)}
          >
            1
          </button>
        </Grid.Col>
        <Grid.Col lg="2.5">
          <button
            onClick={() => submitRating("twoStars", data.rating, data.submittedRatings)}
          >
            2
          </button>
        </Grid.Col>
        <Grid.Col lg="2.5">
          <button
            onClick={() => submitRating("threeStars", data.rating, data.submittedRatings)}
          >
            3
          </button>
        </Grid.Col>
        <Grid.Col lg="2.5">
          <button
            onClick={() => submitRating("fourStars", data.rating, data.submittedRatings)}
          >
            4
          </button>
        </Grid.Col>
        <Grid.Col lg="2">
          <button
            onClick={() => submitRating("fiveStars", data.rating, data.submittedRatings)}
          >
            5
          </button>
        </Grid.Col>
      </Grid.Row>
    </Card>
  );
};

export default ShopCard;
