import React, { useState, useEffect, useContext } from 'react'
import { Box, Grid } from '@mui/material'
import GameModeCard from './GameModeCard/GameModeCard.jsx'
import languageContext from '../languageContext.jsx'

const GameModesPage = () => {
  const [modes, setModes] = useState([])
  const { language } = useContext(languageContext)

  useEffect(() => {
    fetch(`https://overfast-api.tekrop.fr/gamemodes?locale=${language}`)
      .then((response) => response.json())
      .then((data) => setModes(data))
      .catch((error) => console.error(error))
  }, [language])

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
      <Grid container spacing={2} rowSpacing={2} alignItems="center" justifyContent="center">
        {modes.map((mode, index) => (
          <Grid item key={index}>
            <GameModeCard
              name={mode.name}
              description={mode.description}
              screenshot={mode.screenshot}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default GameModesPage
