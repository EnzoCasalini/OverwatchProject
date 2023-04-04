import React, {useEffect, useState} from 'react';
import heroes_bg from "../assets/bg.jpg";
import {Box} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import HeroCard from "./HeroCard/HeroCard.jsx";


const HeroesPage = () => {
    const [heroes, setHeroes] = useState([]);

    const getHeroes = async () => {
        const response = await fetch('https://overfast-api.tekrop.fr/heroes');
        const data = await response.json();
        setHeroes(data);
    }

    useEffect(() => {
        getHeroes();
    });

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                position: 'relative',
                background: "radial-gradient(31.74% 3046.23% at 50% 49.81%,#242a42 0,#121524 100%)",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{marginTop: "20px"}} >
                {
                    heroes.map((hero, index) => {
                        return (
                            <Grid key={index}><HeroCard image={hero.portrait}/></Grid>
                        );
                    })
                }
            </Grid>
        </Box>
    );
};

export default HeroesPage;
