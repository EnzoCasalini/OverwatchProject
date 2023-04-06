import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Backdrop, Box, Card, CardContent, CircularProgress, Typography } from '@mui/material'
import HeroSkills from './HeroSkills/HeroSkills.jsx'
import HeroInfos from './HeroInfos/HeroInfos.jsx'
import languageContext from '../languageContext.jsx'

const HeroesDetailsPage = () => {
  const { heroKey } = useParams()
  const [hero, setHero] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { language } = useContext(languageContext)

  const modifyHeroKey = (heroKey) => {
    if (heroKey.indexOf(': ') !== -1) {
      return heroKey.split(': ').join('-').toLowerCase()
    } else if (heroKey.indexOf('.') !== -1) {
      return heroKey.split('.').join('').toLowerCase()
    } else if (heroKey.indexOf(' ') !== -1) {
      return heroKey.split(' ').join('-').toLowerCase()
    } else return heroKey.toLowerCase()
  }

  const getHero = async () => {
    setIsLoading(true)
    const response = await fetch(
      `https://overfast-api.tekrop.fr/heroes/${modifyHeroKey(heroKey)}?locale=${language}`
    )
    const data = await response.json()
    setHero(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getHero()
  }, [language])

  return (
    <>
      {isLoading ? (
        <Backdrop
          sx={{ color: '#f3f4ff', zIndex: (theme) => theme.zIndex.drawer + 10000 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Box
          sx={{
            width: '100vw',
            minHeight: '100vh',
            padding: '100px 3%',
            position: 'relative',
            background: 'radial-gradient(31.74% 3046.23% at 50% 49.81%,#242a42 0,#121524 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              width: '70%',
              maxWidth: '700px',
              padding: '2%',
              backgroundColor: 'transparent',
              border: '2px solid white',
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <HeroInfos hero={hero} />
              <Typography align="center" color="#f3f4ff" fontSize="24px" sx={{ marginTop: '20px' }}>
                Skills :{' '}
              </Typography>
              {hero.abilities &&
                hero.abilities.map((ability, index) => {
                  return <HeroSkills key={index} ability={ability} />
                })}
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  )
}

export default HeroesDetailsPage
