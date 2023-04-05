import React from 'react';
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

const Links = ({page, margin}) => {
    return (
            <Link to={`/${page.toLowerCase()}`} style={{color: "#031950", fontWeight: "bold", marginRight: margin}}>
                {page}
            </Link>
    );
};

export default Links;
