import React from "react";
import { db } from "../../firebase";
import { Grid, Card, Button } from "tabler-react";
import styles from "./ShopCard.module.css";

const ShopCard = data => {

  const submitRating = (newRating, currentRating, submittedRatings) => {
    const dbrating = Math.round((newRating + currentRating) / (submittedRatings + 1));
    const dbcount = submittedRatings + 1;

    db.collection('donerShops')
      .doc(data.id)
      .update({
        rating: dbrating,
        submittedRatings: dbcount
      })
      .then(() => {
        console.log("New rating added");
      })
      .catch(error => {
        console.log("Error adding rating", error);
      });
  } 

  return (
    <Card className={styles.CardContainer}>
      <p>{data.name}</p>
      <p>{data.location}</p>
      <p>{data.rating}</p>
      <p>{data.submittedRatings}</p>
      <Grid.Row className={styles.RatingRow}>
        <Grid.Col lg="2.5">
          <button onClick={() => submitRating(1, data.rating, data.submittedRatings)}>1</button>
        </Grid.Col>
        <Grid.Col lg="2.5">
          <button onClick={() => submitRating(2, data.rating, data.submittedRatings)}>2</button>
        </Grid.Col>
        <Grid.Col lg="2.5">
          <button onClick={() => submitRating(3, data.rating, data.submittedRatings)}>3</button>
        </Grid.Col>
        <Grid.Col lg="2.5">
          <button onClick={() => submitRating(4, data.rating, data.submittedRatings)}>4</button>
        </Grid.Col>
        <Grid.Col lg="2.5">
          <button onClick={() => submitRating(5, data.rating, data.submittedRatings)}>5</button>
        </Grid.Col>
      </Grid.Row>
    </Card>
  );
};

export default ShopCard;
