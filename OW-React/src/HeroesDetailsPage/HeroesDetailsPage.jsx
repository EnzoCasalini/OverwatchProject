import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Box, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import RoleIcon from "../HeroesPage/HeroCard/RoleIcon/RoleIcon.jsx";

const HeroesDetailsPage = () => {
    const { heroKey } = useParams();
    const [hero, setHero] = useState({});

    const getHero = async () => {
        const response = await fetch(`https://overfast-api.tekrop.fr/heroes/${heroKey.toLowerCase()}`);
        const data = await response.json();
        setHero(data);
        console.log(data);
    }

    useEffect(() => {
        getHero();
    }, [heroKey]);


    return (
        <Box
            sx={{
                width: '100vw',
                minHeight: '100vh',
                padding: '100px 3%',
                position: 'relative',
                background: "radial-gradient(31.74% 3046.23% at 50% 49.81%,#242a42 0,#121524 100%)",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Card sx={{width: "70%", maxWidth: "700px", padding: "2%", backgroundColor: "transparent", border: "2px solid white"}}>
                <CardContent sx={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-evenly"}}>
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <RoleIcon role={hero.role} width="30px" height="30px"/>
                        <Typography align="center" color="#f3f4ff" fontSize="28px" sx={{marginLeft: "10px"}}>{hero.name}</Typography>
                    </Box>
                    <CardMedia component="img" src={hero.portrait} alt={`${hero.name}'s portrait image`} sx={{width: "150px", height: "150px", margin: "20px 0", borderRadius: "50%"}}></CardMedia>
                    <Typography align="center" color="#f3f4ff" fontSize="16px">{hero.description}</Typography>
                    <Typography align="center" color="#f3f4ff" fontSize="24px" sx={{marginTop: "20px"}}>Skills : </Typography>
                    {
                        hero.abilities && hero.abilities.map((ability, index) => {
                            return (
                                <Box key={index} sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px", width: "60%"}}>
                                    <Typography align="center" color="#f3f4ff" fontSize="20px" fontWeight="bold">{ability.name}</Typography>
                                    <CardMedia component="img" src={ability.icon} alt={`${ability.name}'s image`} sx={{width: "50px", height: "50px"}}></CardMedia>
                                    <Typography align="center" color="#f3f4ff" fontSize="16px">{ability.description}</Typography>
                                </Box>
                            );
                        })
                    }
                </CardContent>
            </Card>
        </Box>
    );
};

export default HeroesDetailsPage;
