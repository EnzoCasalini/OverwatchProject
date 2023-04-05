import React, { useState, useEffect } from 'react';
import MapCard from "./MapCard/MapCard.jsx";
import {Box, Grid, Paper} from "@mui/material";
import Header from "../Header/Header.jsx";

function MapsPage() {
    const [data, setData] = useState([]);

    const gameModes = [
        { id: 1, title: "assault" },
        { id: 2, title: "capture-the-flag" },
        { id: 3, title: "control" },
        { id: 4, title: "deathmatch" },
        // { id: 5, title: "team-deathmatch" },
        { id: 6, title: "elimination" },
        { id: 7, title: "escort" },
        { id: 8, title: "hybrid" },
        { id: 9, title: "push" },
    ];

    useEffect(() => {
        fetch('https://overfast-api.tekrop.fr/maps')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Box
            sx={{
                marginTop: '150px',
                // marginLeft: '0',
                // marginRight: '0',
                display: 'flex',
                justifyContent: 'center',
                // backgroundColor: 'grey',
            }}>
            <Grid container spacing={2} rowSpacing={2} alignItems="center" justifyContent="center">
                {data.map((ow_map) => (
                    <Grid item>
                        <MapCard name={ow_map.name} screenshot={ow_map.screenshot} gamemodes={ow_map.gamemodes} location={ow_map.location} country_code={ow_map.country_code}/>
                    </Grid>
                ))}
            </Grid>
        </Box>

        // <Box
        //     sx={{
        //         flexGrow: 1,
        //         marginTop: '150px',
        //         background: "radial-gradient(31.74% 3046.23% at 50% 49.81%,#242a42 0,#121524 100%)",
        //     }}>
        //     <Grid container spacing={3} sx={{marginBottom:'20px'}}>
        //         {gameModes.map((mode) => (
        //             <Grid item xs key={mode.id}>
        //                 <Paper
        //                     sx={{
        //                         padding: "10px",
        //                         textAlign: "center",
        //                     }}
        //                 >
        //                     {mode.title}
        //                 </Paper>
        //                 {/*<div>{gameModes.title}</div>*/}
        //             </Grid>
        //         ))}
        //     </Grid>
        //
        //     <Grid container spacing={0} rowSpacing={2}
        //           // alignItems="center" justifyContent="center"
        //     >
        //         {gameModes.map((mode) => (
        //             <Grid item xs key={mode.id}>
        //                 <Grid container spacing={1}>
        //                     {data
        //                         .filter((ow_map) => ow_map.gamemodes[0] === mode.title || ow_map.gamemodes[1] == mode.title)
        //                         .map((ow_map) => (
        //
        //                             <Grid item xs={12}>
        //                                 <MapCard name={ow_map.name} screenshot={ow_map.screenshot} gamemodes={ow_map.gamemodes} location={ow_map.location} country_code={ow_map.country_code}/>
        //                             </Grid>
        //                         ))}
        //                 </Grid>
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Box>
    );
}

export default MapsPage;