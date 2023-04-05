import React from 'react';
import {Box, Card, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import RoleIcon from "./RoleIcon/RoleIcon.jsx";

const HeroCard = ({name, image, role}) => {
    return (
        <Link to={`/heroes/${name}`}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Card>
                    <CardMedia
                        component="img"
                        height="90"
                        image={image}
                        alt="Hero image"
                    />
                </Card>
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", height: "30px"}}>
                    <RoleIcon role={role} width="15px" height="15px"/>
                    <Typography sx={{marginLeft: "10px", marginTop: "5px", color: "#FFFFFF"}}>{name}</Typography>
                </Box>
            </Box>
        </Link>
    );
};

export default HeroCard;
