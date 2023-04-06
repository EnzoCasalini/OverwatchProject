import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import GeneralStats from './GeneralStats/GeneralStats';
import AverageKDA from './AverageKDA/AverageKDA';
import TotalKDA from './TotalKDA/TotalKDA';

const PlayerStats = ({player_id}) => {
    const [playerStatsSummary, setPlayerStatsSummary] = useState({});

    const getPlayerStatsSummary = async () => {
        const response = await fetch(`https://overfast-api.tekrop.fr/players/${player_id}/stats/summary`);
        const data = await response.json();
        setPlayerStatsSummary(data);
    }

    useEffect(() => {
        getPlayerStatsSummary();
    }, [])

    return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
      }}
    >
      <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
        Stats Summary : 
      </Typography>

      {/* <GeneralStats general_stats={playerStatsSummary.general} />
      <TotalKDA total_stats={playerStatsSummary.general.total} />
      <AverageKDA average_stats={playerStatsSummary.general.average} /> */}
    </Box>
    );
}

export default PlayerStats;