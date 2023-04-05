import React, { useEffect, useState } from 'react';
import {Box} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import HeroCard from './HeroCard/HeroCard.jsx';
import FilterButtons from "./FilterButtons/FilterButtons.jsx";

const HeroesPage = () => {
    const [heroes, setHeroes] = useState([]);
    const [filter, setFilter] = useState('all');

    const getHeroes = async () => {
        const response = await fetch('https://overfast-api.tekrop.fr/heroes');
        const data = await response.json();
        setHeroes(data);
    };

    useEffect(() => {
        getHeroes();
    }, []);

    const filterHeroes = (role) => setFilter(role);

    const filteredHeroes = filter === 'all' ? heroes : heroes.filter((hero) => hero.role === filter);

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
            }}
        >
            <FilterButtons filterHeroes={filterHeroes} filter={filter}/>
            <Grid
                container
                spacing={7}
                rowSpacing={4}
                alignItems='center'
                justifyContent='center'
                sx={{ marginTop: '20px' }}
            >
                {filteredHeroes.map((hero, index) => {
                    return (
                        <Grid key={index}>
                            <HeroCard
                                name={hero.name}
                                image={hero.portrait}
                                role={hero.role}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default HeroesPage;
