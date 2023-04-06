import React from 'react'
import { Box, Button } from '@mui/material'

const FilterButtons = ({ filterMaps, filter, modes }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        maxWidth: '70%',
      }}
    >
      {modes.map((mode, index) => (
        <Button
          key={index}
          variant={filter === mode.title ? 'contained' : 'outlined'}
          onClick={() => filterMaps(`${mode.title}`)}
          color={'primary'}
          sx={{ width: '200px', marginBottom: '20px', marginRight: { sx: '0', md: '10px' } }}
        >
          {mode.title}
        </Button>
      ))}
    </Box>
  )
}

export default FilterButtons
