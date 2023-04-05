import React, { useState, useEffect } from 'react';
import {Grid} from "@mui/material";

function GameModesList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://overfast-api.tekrop.fr/gamemodes')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Grid container
              spacing={2}
              rowSpacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{
                  // marginTop: '100px',
                  // marginLeft: '0',
                  // marginRight: '0',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: 'grey',
              }}
        >
            {data.map((item) => (
                <Grid item>
                    <MapsCard name={item.name} screenshot={item.screenshot} gamemodes={item.gamemodes} location={item.location} country_code={item.country_code}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default GameModesList;