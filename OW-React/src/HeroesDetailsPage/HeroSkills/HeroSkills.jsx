import React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";

const HeroSkills = ({ability}) => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px", width: "60%"}}>
            <Typography align="center" color="#f3f4ff" fontSize="20px" fontWeight="bold">{ability.name}</Typography>
            <CardMedia component="img" src={ability.icon} alt={`${ability.name}'s image`} sx={{width: "50px", height: "50px"}}></CardMedia>
            <Typography align="center" color="#f3f4ff" fontSize="16px">{ability.description}</Typography>
        </Box>
    );
};

export default HeroSkills;
