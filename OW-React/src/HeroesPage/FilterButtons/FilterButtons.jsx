import React from 'react';
import {Box, Button} from "@mui/material";

const FilterButtons = ({filterHeroes, filter}) => {
    const roles = ['all', 'damage', 'support', 'tank'];

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', width: '60%', maxWidth: '460px' }}>
            {
                roles.map((role, index) => {
                    return (
                        <Button 
                        key={index} 
                        variant={filter === role ? 'contained' : 'outlined'}
                        onClick={() => filterHeroes(role)}
                        color={'primary'}
                        sx={{ width: '90px', marginBottom: '10px', marginRight: '20px'}}
                        >
                            {role}
                        </Button>
                )})
            }
    </Box>
    );
};

export default FilterButtons;
