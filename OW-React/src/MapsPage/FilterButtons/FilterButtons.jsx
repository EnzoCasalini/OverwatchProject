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
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', width: '70%', maxWidth: '70%' }}>
            <ThemeProvider theme={theme}>
                {modes.map((mode) => (
                    <Button
                        variant={filter === {mode} ? 'contained' : 'outlined'}
                        onClick={() => filterMaps(`${mode.title}`)}
                        color={'primary'}
                        sx={{ width: '120px', marginBottom: '20px'}}
                    >
                        {mode.title}
                    </Button>
                ))}
            </ThemeProvider>
    </Box>
    );
};

export default FilterButtons;
