import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, CardActionArea, Chip} from '@mui/material';

function MapCard({name, screenshot, gamemodes, location, country_code}) {
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
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Card sx={{
                width: "15vw",
                height: '20vh',
                marginBottom: '10px',
            }}>
                <CardActionArea sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    padding:'0',
                    margin:'0',
                }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            // alignItems: 'center',
                            // justifyContent: 'center',
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={screenshot}
                            // display={"flex"}
                            // alt="green iguana"
                            sx={{
                                // padding:'0',
                                // margin: '0',
                                // paddingBottom: '10px',
                                width: '100%',
                                height: '13vh',
                                position: 'absolute',
                                top: '0',
                                left: '0',
                            }}
                        />
                        <Typography gutterBottom variant="h5" component="div" textAlign={"center"}
                            sx={{postion:'relative', paddingTop: '100px', margin:'0', fontSize: '1.2vw'}}
                        >
                            {name}
                        </Typography>
                        {/*<Typography variant="body2" sx={{marginTop: '5px', marginBottom: '5px', justifyContent: 'center'}}>*/}
                        {/*    {gamemodes.map((item) => (*/}
                        {/*        <Chip*/}
                        {/*            label={item}*/}
                        {/*            color="primary"*/}
                        {/*        ></Chip>*/}
                        {/*    ))}*/}
                        {/*</Typography>*/}
                        {/*<Typography gutterBottom variant="h5" component="div" textAlign={"center"}>*/}
                        {/*    {location}*/}
                        {/*</Typography>*/}
                        {/*<Typography gutterBottom variant="h5" component="div" textAlign={"center"}>*/}
                        {/*    {country_code}*/}
                        {/*</Typography>*/}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default MapCard;