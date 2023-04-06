import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Fade } from '@mui/material'
import { Box, CardActionArea, Chip } from '@mui/material'
import {useNavigate} from "react-router-dom";

const MapCard = ({ name, screenshot, gamemodes, location, country_code }) => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true)
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Card
                sx={{
                    width: '200px',
                    height: '150px',
                    marginBottom: '10px',
                    "& :hover": {
                        backgroundColor: "orange",
                        color: "white",
                    }
                }}
            >
                <CardActionArea
                    onClick={() => {
                        handleOpen()
                    }}
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        padding: '0',
                        margin: '0',
                    }}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={screenshot}
                            sx={{
                                width: '100%',
                                height: '70%',
                                position: 'absolute',
                                top: '0',
                                left: '0',
                            }}
                        />
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            textAlign={'center'}
                            sx={{
                                postion: 'relative',
                                paddingTop: '100px',
                                margin: '0',
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }}
                        >
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Modal
                open={open}
                onClose={handleOpen}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Fade in={open}>
                    <Box
                        sx={{ height: 'auto', width: '40vw', backgroundColor: 'white', borderRadius: '15px' }}
                    >
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '15px',
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={screenshot}
                                    onClick={() => window.open(`${screenshot}`)}
                                    sx={{
                                        width: '100%',
                                        height: '80%',
                                        display: 'flex',
                                        borderRadius:'15px',
                                    }}
                                />
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    textAlign={'center'}
                                    sx={{
                                        postion: 'relative',
                                        paddingTop: '20px',
                                        margin: '0',
                                        marginBottom: '20px',
                                        fontSize: '25px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {name}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                    {location}, {country_code}
                                </Typography>
                                <Typography variant="body2" sx={{ marginTop: '20px' }}>
                                    {gamemodes.map((item, index) => (
                                        <Chip
                                            key={index}
                                            label={item.charAt(0).toUpperCase() + item.slice(1)}
                                            onClick={() => navigate(`/gamemodes`)}
                                            color="primary"
                                            sx={{ borderRadius: '5px', backgroundColor: 'orange', margin: '5px', color:'white' }}
                                        ></Chip>
                                    ))}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}

export default MapCard
