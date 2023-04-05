import React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";
import RoleIcon from "../../HeroesPage/HeroCard/RoleIcon/RoleIcon.jsx";
import LocationOnIcon from "@mui/icons-material/LocationOn.js";

const HeroInfos = ({hero}) => {
    return (
        <>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <RoleIcon role={hero.role} width="30px" height="30px"/>
                <Typography align="center" color="#f3f4ff" fontSize="28px" sx={{marginLeft: "10px"}}>{hero.name}</Typography>
            </Box>
            <CardMedia component="img" src={hero.portrait} alt={`${hero.name}'s portrait image`} sx={{width: "150px", height: "150px", margin: "20px 0", borderRadius: "50%"}}></CardMedia>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px"}}>
                <LocationOnIcon fontSize="small" sx={{color: "#f3f4ff"}}/>
                <Typography align="center" color="#f3f4ff" fontSize="12px" sx={{marginLeft: "5px", marginTop: "3px"}}>{hero.location}</Typography>
            </Box>
            <Typography align="center" color="#f3f4ff" fontSize="16px">{hero.description}</Typography>
        </>
    );
};

export default HeroInfos;
