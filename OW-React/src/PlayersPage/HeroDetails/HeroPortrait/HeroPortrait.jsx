import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'

const HeroPortrait = ({ heroes, heroKey }) => {
  const [heroPortrait, setHeroPortrait] = useState('')

  const findHeroPortrait = () => {
    const hero = heroes.find((hero) => hero.name.toLowerCase() === heroKey)
    if (hero) {
      return hero.portrait
    }
    return null
  }

  useEffect(() => {
    const portrait = findHeroPortrait()
    setHeroPortrait(portrait)
  })

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '30px',
        height: '30px',
        marginRight: '10px',
      }}
    >
      <img
        src={heroPortrait}
        alt={`${heroKey} portrait`}
        style={{ objectFit: 'contain', width: '100%', height: '100%', borderRadius: '50%' }}
      />
    </Box>
  )
}

export default HeroPortrait
