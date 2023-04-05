import React, { useState, useEffect } from 'react';
import MapCard from "./MapCard/MapCard.jsx";
import {Box, Grid, Paper} from "@mui/material";
import Header from "../Header/Header.jsx";
import FilterButtons from "../MapsPage/FilterButtons/FilterButtons.jsx";

function MapsPage() {
    const [data, setData] = useState([]);
    const [maps, setMaps] = useState([]);
    const [filter, setFilter] = useState('all');
    const gameModes = [
        { id: 1, title: "all" },
        { id: 2, title: "assault" },
        { id: 3, title: "capture-the-flag" },
        { id: 4, title: "control" },
        { id: 5, title: "deathmatch" },
        // { id: 6, title: "team-deathmatch" },
        { id: 7, title: "elimination" },
        { id: 8, title: "escort" },
        { id: 9, title: "hybrid" },
        { id: 10, title: "push" },
    ];

    useEffect(() => {
        fetch('https://overfast-api.tekrop.fr/maps')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    const filterMaps = (mode) => setFilter(mode);

    return (
        <Box
            sx={{
                width: '100vw',
                minHeight: '100vh',
                padding: '120px 3%',
                position: 'relative',
                background: 'radial-gradient(31.74% 3046.23% at 50% 49.81%,#242a42 0,#121524 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <FilterButtons filterMaps={filterMaps} filter={filter} modes={gameModes}/>
            <Grid container spacing={2} rowSpacing={2} alignItems="center" justifyContent="center">
                {data
                    .filter((ow_map) => ow_map.gamemodes[0] === filter || filter === 'all')
                    .map((ow_map) => (
                    <Grid item>
                        <MapCard name={ow_map.name} screenshot={ow_map.screenshot} gamemodes={ow_map.gamemodes} location={ow_map.location} country_code={ow_map.country_code}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default MapsPage;