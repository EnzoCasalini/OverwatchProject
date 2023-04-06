import React from 'react'
import { Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import '../../../border-efffect.css'

const GeneralStats = ({ general_stats }) => {
  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        overflow: 'visible',
        marginTop: '20px',
        width: '200px',
      }}
    >
      <CardContent
        sx={{
          border: '1px solid #f3f4ff',
          borderTop: 'none',
          zIndex: '1',
          position: 'relative',
          height: '110px',
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          align="center"
          fontWeight="bold"
          sx={{ position: 'relative', top: '-33px', zIndex: '3', color: '#FFA400' }}
        >
          General
        </Typography>
        <Typography
          variant="body2"
          component="p"
          align="center"
          sx={{ position: 'relative', top: '-33px', zIndex: '3', color: '#f3f4ff' }}
        >
          <b>Games played</b>: {general_stats.games_played}
          <br />
          <b>Time played</b>: {Math.round(general_stats.time_played / 3600)} hours
          <br />
          <b>Winrate</b>: {general_stats.winrate}%
          <br />
          <b>KDA</b>: {general_stats.kda}
        </Typography>
        <span className="border-top__left" />
        <span className="border-top__right" />
      </CardContent>
    </Card>
  )
}

export default GeneralStats
