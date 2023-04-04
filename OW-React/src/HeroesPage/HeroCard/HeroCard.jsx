import React from 'react';
import {Card, CardMedia} from "@mui/material";

const HeroCard = ({image}) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="100"
                image={image}
                alt="Hero image"
            />
        </Card>
    );
};

export default HeroCard;
