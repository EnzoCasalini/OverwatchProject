import React, {useState} from 'react';
import {Box, Card, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import RoleIcon from "./RoleIcon/RoleIcon.jsx";
import PlaceholderImage from '../../assets/placeholder.png';

const HeroCard = ({name, image, role}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <Link to={`/heroes/${name}`}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: "130px", height: "120px"}}>
                <Card>
                    {!loaded && (
                        <CardMedia
                            component="img"
                            height="90"
                            src={PlaceholderImage}
                            alt="OW logo as placeholder"
                            style={{ objectFit: "contain" }}
                        />
                    )}
                    <CardMedia
                        component="img"
                        height="90"
                        image={image}
                        alt="Hero image"
                        style={{ display: loaded ? "block" : "none" }}
                        onLoad={() => setLoaded(true)}
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
