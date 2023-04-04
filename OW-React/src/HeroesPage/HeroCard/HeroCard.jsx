import React from 'react';
import {Box, Card, CardMedia, Typography} from "@mui/material";

const HeroCard = ({name, image}) => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Card>
                <CardMedia
                    component="img"
                    height="90"
                    image={image}
                    alt="Hero image"
                />
            </Card>
            <Typography sx={{marginTop: "10px"}}>{name}</Typography>
        </Box>
    );
};

export default HeroCard;
