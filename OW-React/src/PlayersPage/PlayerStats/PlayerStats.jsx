import React, { useEffect, useState } from 'react';
import {Backdrop, Box, CircularProgress, Typography} from '@mui/material';
import GeneralStats from './GeneralStats/GeneralStats';
import AverageKDA from './AverageKDA/AverageKDA';
import TotalKDA from './TotalKDA/TotalKDA';

const PlayerStats = ({player_id}) => {
    const [playerStatsSummary, setPlayerStatsSummary] = useState({general: {total: {}, average: {}}});
    const [loading, setLoading] = useState(false);

    const getPlayerStatsSummary = async () => {
        setLoading(true);
        const response = await fetch(`https://overfast-api.tekrop.fr/players/${player_id}/stats/summary`);
        const data = await response.json();
        setPlayerStatsSummary(data);
        setLoading(false);
    }

    useEffect(() => {
        getPlayerStatsSummary();
    }, [player_id])

    return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
      }}
    >
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
      <Typography variant="h5" component="h3" fontWeight="bold" color={"#f3f4ff"} gutterBottom>
        Stats Summary : 
      </Typography>

      <GeneralStats general_stats={playerStatsSummary.general} />
      <TotalKDA total_stats={playerStatsSummary.general.total} />
      <AverageKDA average_stats={playerStatsSummary.general.average} />

    </Box>
    );
}

export default PlayerStats;