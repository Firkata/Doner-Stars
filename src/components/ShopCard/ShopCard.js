import React from 'react';
import { Grid, Card, Button } from 'tabler-react';
import styles from './ShopCard.module.css';

const ShopCard = (data) => {
    return (
        <Card className={styles.CardContainer}>
            <p>{data.name}</p>
            <p>{data.location}</p>
            <p>{data.rating}</p>
            <p>{data.submittedRatings}</p>
            <Grid.Row>
                <Grid.Col lg="2"><button>1</button></Grid.Col>
                <Grid.Col lg="2"><button>2</button></Grid.Col>
                <Grid.Col lg="2"><button>3</button></Grid.Col>
            </Grid.Row>
        </Card>
    );
}

export default ShopCard;