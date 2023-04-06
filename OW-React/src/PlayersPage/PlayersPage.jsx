import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import PlayerSummary from './PlayerSummary/PlayerSummary.jsx'
import HeroDetails from './HeroDetails/HeroDetails.jsx'
import { Box, CircularProgress, Typography } from '@mui/material'
import PlayerRanks from './PlayerRanks/PlayerRanks'
import PlayerStats from './PlayerStats/PlayerStats'

const PlayerPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [playerInfo, setPlayerInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (searchTerm) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`https://overfast-api.tekrop.fr/players/${searchTerm}`)
      const data = await response.json()
      setPlayerInfo(data)
    } catch (err) {
      setError(err.response.data)
    } finally {
      localStorage.setItem('search', searchTerm)
      setLoading(false)
    }
  }

  useEffect(() => {
    const search = localStorage.getItem('search')
    if (search) {
      setSearchTerm(search)
      handleSearch(search)
    }
  }, [])

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
      <Typography variant={'h1'} fontSize="22px" fontWeight="bold" sx={{ marginBottom: '20px' }}>
        Search for a player (ex: Brutus-22331)
      </Typography>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        loading={loading}
      />
      {loading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
          }}
        >
          <CircularProgress size={80} color="primary" />
        </Box>
      )}
      {error && (
        <Box
          sx={{
            color: 'red',
            fontSize: '1.5rem',
            fontFamily: 'Montserrat, sans-serif',
            marginTop: '20px',
          }}
        >
          {error}
        </Box>
      )}
      {playerInfo && (
        <Box
          sx={{
            marginTop: '20px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <PlayerSummary playerInfo={playerInfo} />
          <HeroDetails playerInfo={playerInfo} />
          <PlayerRanks playerInfo={playerInfo} />
          <PlayerStats player_id={searchTerm} />
        </Box>
      )}
    </Box>
  )
}

export default PlayerPage
