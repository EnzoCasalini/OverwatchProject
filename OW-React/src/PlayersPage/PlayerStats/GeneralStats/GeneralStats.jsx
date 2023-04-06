import React from 'react';
import { Box, Typography } from '@mui/material'

const GeneralStats = ({general_stats}) => {
    return (
        <Box>
            <Typography>
                Games played : {general_stats.games_played}
            </Typography>
        </Box>
    );
}

export default GeneralStats;