import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Chip} from '@mui/material';

function MapsCard({name, screenshot, gamemodes, location, country_code}) {
    // const [data, setData] = useState([]);
    // const typeTab = [];
    //
    // for (let i = 0; i < type.length; i++) {
    //     typeTab.push(
    //         <Chip
    //             label={type[i]}
    //             color="primary"
    //         ></Chip>
    //     )
    // }

    return (
        // <div>test</div>
        <Card sx={{
            // Width: "200px",
            // Height: '10vh'
            marginBottom: '10px',
        }}>
            <CardActionArea sx={{
                width: '30vw',
                height: '50vh',
                display: 'flex',
            }}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                        {name}
                    </Typography>
                    <CardMedia
                        component="img"
                        image={screenshot}
                        // height="150"
                        width="20vw"
                        display={"flex"}
                        // alt="green iguana"
                    />
                    <Typography variant="body2" display={"flex"} sx={{marginTop: '5px', marginBottom: '5px'}}>
                        {gamemodes.map((item) => (
                            <Chip
                                label={item}
                                color="primary"
                            ></Chip>
                        ))}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                        {location}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                        {country_code}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MapsCard;