import React, { useState } from 'react';
import { Typography, Box, LinearProgress, ButtonGroup, Button} from '@mui/material';
import { Link } from 'react-router-dom';

const HeroDetails = ({ playerInfo }) => {
    const [gameMode, setGameMode] = useState('quickplay');
    const [selectedHero, setSelectedHero] = useState('');
    const handleGameModeChange = (mode) => {
        setGameMode(mode);
    };

    const heroStats = gameMode === 'quickplay' ? playerInfo.stats.pc.quickplay.heroes_comparisons.time_played : playerInfo.stats.pc.competitive.heroes_comparisons.time_played;
    const heroes = heroStats.values.slice(0, 5);

    const handleHeroClick = (heroName) => {
        setSelectedHero(heroName);
    };

    return (
        <Box sx={{ padding: '1rem' }}>
            <Typography variant='h5' component='h3' gutterBottom>
                Heroes played the most in {gameMode === 'quickplay' ? 'Quick Play' : 'Competitive'}
            </Typography>
            <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Button onClick={() => handleGameModeChange('quickplay')} variant={gameMode === 'quickplay' ? 'contained' : 'outlined'}>Quick Play</Button>
                <Button onClick={() => handleGameModeChange('competitive')} variant={gameMode === 'competitive' ? 'contained' : 'outlined'}>Competitive</Button>
            </ButtonGroup>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {playerInfo &&
                    heroes.map((hero, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                            <Typography sx={{ marginRight: '1rem' }}>
                                <Link to={`/heroes/${hero.hero}`} onClick={() => handleHeroClick(hero.hero)}>{hero.hero}</Link>
                            </Typography>
                            <LinearProgress
                                variant='determinate'
                                value={(hero.value / heroStats.values[0].value) * 100}
                                sx={{ flexGrow: 1 }}
                            />
                            <Typography sx={{ marginLeft: '1rem' }}>{(hero.value / 3600).toFixed(2)} hours</Typography>
                        </Box>
                    ))}
            </Box>
        </Box>
    );
};

export default HeroDetails;
