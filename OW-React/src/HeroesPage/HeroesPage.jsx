import React, { useState, useContext } from 'react';
import {Box,Grid} from '@mui/material';
import HeroCard from './HeroCard/HeroCard.jsx';
import FilterButtons from "./FilterButtons/FilterButtons.jsx";
import heroesContext from '../heroesContext.jsx';

const HeroesPage = () => {
    const { heroes } = useContext(heroesContext);
    const [filter, setFilter] = useState('all');

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
                spacing={4}
                rowSpacing={4}
                alignItems='center'
                justifyContent='center'
                sx={{ marginTop: '20px' }}
            >
                {filteredHeroes.map((hero, index) => {
                    return (
                        <Grid key={index} item>
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
