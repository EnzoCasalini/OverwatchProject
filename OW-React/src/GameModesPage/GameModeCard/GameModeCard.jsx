import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Fade} from "@mui/material";
import {Box, CardActionArea} from '@mui/material';

function GameModeCard({name, description, screenshot}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true);
    };

    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Card sx={{
                width: "15vw",
                height: '20vh',
                marginBottom: '10px',
                "& :hover": {
                    backgroundColor: "orange",
                    color: "white",
                }
            }}>
                <CardActionArea
                    onClick={() => {handleOpen()}}
                    sx={{
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
                            borderRadius:'25px',
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
                                    sx={{postion:'relative', paddingTop: '100px', margin:'0', fontSize: '1.2vw', fontWeight:'bold',}}
                        >
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Modal
                open={open}
                onClose={handleOpen}
                // closeAfterTransition
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Fade in={open}>
                    <Box sx={{height:'auto', width:'40vw', backgroundColor:'white', borderRadius:'15px',}}>
                        <Card sx={{
                            width: "100%",
                            height: '100%',
                            // marginBottom: '10px',
                            alignItems:'center',
                            justifyContent:'center',
                            border:'solid',
                            borderColor:'radial-gradient(31.74% 3046.23% at 50% 49.81%,#242a42 0,#121524 100%)',
                            borderWidth:'5px',
                            borderRadius:'15px',
                        }}>
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
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
                                        height: '80%',
                                        display:'flex',
                                        border:'solid',
                                        borderColor:'radial-gradient(31.74% 3046.23% at 50% 49.81%,#242a42 0,#121524 100%)',
                                        borderWidth:'3px',
                                        borderRadius:'15px',
                                        // justifyContent:'center',
                                        // alignItems:'center',
                                        // position: 'relative',
                                        // top: '0',
                                        // left: '0',
                                    }}
                                />
                                <Typography gutterBottom variant="h5" component="div" textAlign={"center"}
                                            sx={{postion:'relative', paddingTop: '20px', paddingBottom:'20px',margin:'0', fontSize: '2vw', fontWeight:'bold'}}
                                >
                                    {name}
                                </Typography>
                                <Typography gutterBottom component="div" textAlign={"center"}>
                                    {description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}

export default GameModeCard;