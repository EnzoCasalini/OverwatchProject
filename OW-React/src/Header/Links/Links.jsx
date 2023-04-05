import React from 'react';
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

const Links = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "30%",
            maxWidth: "300px",
            height: "100%",
            alignItems: "center",
        }}>
            <Link to="/maps" style={{color: "#031950", fontWeight: "bold"}}>
                Maps
            </Link>
            <Link to="/heroes" style={{color: "#031950", fontWeight: "bold"}}>
                Heroes
            </Link>
            <Link to="/gameModes" style={{color: "#031950", fontWeight: "bold"}}>
                GameModes
            </Link>
        </Box>
    );
};

export default Links;
