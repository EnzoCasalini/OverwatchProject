import React from 'react';
import {Box} from "@mui/material";
import tankIcon from '../../../assets/tank-icon.png';
import damageIcon from '../../../assets/damage-icon.png';
import supportIcon from '../../../assets/support-icon.png';

const RoleIcon = ({role, width, height}) => {
    if (role === 'damage') {
        return (
            <Box sx={{width: width, height: height}}>
                <img src={damageIcon} alt="damage icon" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
            </Box>
        )
    } else if (role === 'tank') {
        return (
            <Box sx={{width: width, height: height}}>
                <img src={tankIcon} alt="damage icon" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
            </Box>
        )
    } else if (role === 'support') {
        return (
            <Box sx={{width: width, height: height}}>
                <img src={supportIcon} alt="damage icon" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
            </Box>
        )
    } else {
        return null
    }
};

export default RoleIcon;
