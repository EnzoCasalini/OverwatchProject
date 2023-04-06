import React from 'react'
import { Box, TextField, Button } from '@mui/material'

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch, loading }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
      <TextField
        label="Search"
        variant="outlined"
        color="primary"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ width: '200px' }}
        InputProps={{
          style: { color: '#f3f4ff' },
        }}
        InputLabelProps={{
          style: {
            color: '#f3f4ff',
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleSearch(searchTerm)}
        disabled={!searchTerm || loading}
        sx={{ width: '90px' }}
      >
        Search
      </Button>
    </Box>
  )
}

export default SearchBar
