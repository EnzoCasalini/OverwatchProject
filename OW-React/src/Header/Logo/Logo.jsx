import React from 'react';
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import logo from '../../assets/ow-logo.png';

const Logo = () => {
    return (
        <Link to="/">
            <Box sx={{
                width: "200px",
                height: "70px",
            }}>
                <Box component="img" alt="PokedexLogo" src={logo} sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }}>
                </Box>
            </Box>
        </Link>
    );
};

export default Logo;
