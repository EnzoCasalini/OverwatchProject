import React from 'react';
import {Box, Button, createTheme, ThemeProvider} from "@mui/material";

const FilterButtons = ({filterMaps, filter, modes}) => {


    const theme = createTheme({
        palette: {
            primary: {
                main: '#f3f4ff',
            },
        },
    });

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '70%', maxWidth: '70%' }}>
            <ThemeProvider theme={theme}>
                {modes.map((mode, index) => (
                    <Button
                        key={index}
                        variant={filter === mode.title ? 'contained' : 'outlined'}
                        onClick={() => filterMaps(`${mode.title}`)}
                        color={'primary'}
                        sx={{ width: '200px', marginBottom: '20px', marginRight: {sx: '0', md: '10px'} }}
                    >
                        {mode.title}
                    </Button>
                ))}
            </ThemeProvider>
    </Box>
    );
};

export default FilterButtons;
