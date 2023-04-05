import React from 'react';
import {Box, Button, createTheme, ThemeProvider} from "@mui/material";

const FilterButtons = ({filterHeroes, filter}) => {


    const theme = createTheme({
        palette: {
            primary: {
                main: '#f3f4ff',
            },
        },
    });

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', width: '60%', maxWidth: '400px' }}>
            <ThemeProvider theme={theme}>
                <Button
                    variant={filter === 'all' ? 'contained' : 'outlined'}
                    onClick={() => filterHeroes('all')}
                    color={'primary'}
                    sx={{ width: '90px', marginBottom: '10px'}}
                >
                    All
                </Button>
                <Button
                    variant={filter === 'damage' ? 'contained' : 'outlined'}
                    onClick={() => filterHeroes('damage')}
                    sx={{ width: '90px', marginBottom: '10px'}}
                >
                    Damage
                </Button>
                <Button
                    variant={filter === 'support' ? 'contained' : 'outlined'}
                    onClick={() => filterHeroes('support')}
                    sx={{ width: '90px', marginBottom: '10px'}}
                >
                    Support
                </Button>
                <Button
                    variant={filter === 'tank' ? 'contained' : 'outlined'}
                    onClick={() => filterHeroes('tank')}
                    sx={{ width: '90px', marginBottom: '10px'}}
                >
                    Tank
                </Button>
            </ThemeProvider>
    </Box>
    );
};

export default FilterButtons;
