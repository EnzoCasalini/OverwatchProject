import React from 'react'
import { Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import '../../../border-efffect.css'

const AverageKDA = ({ average_stats }) => {
  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        overflow: 'visible',
        marginTop: '40px',
        width: '200px',
      }}
    >
      <CardContent
        sx={{
          border: '1px solid #f3f4ff',
          borderTop: 'none',
          zIndex: '1',
          position: 'relative',
          height: '130px',
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          align="center"
          fontWeight="bold"
          sx={{ position: 'relative', top: '-33px', zIndex: '3', color: '#FFA400' }}
        >
          Average
        </Typography>
        <Typography
          variant="body2"
          component="p"
          align="center"
          sx={{ position: 'relative', top: '-33px', zIndex: '3', color: '#f3f4ff' }}
        >
          <b>Eliminations</b>: {average_stats.eliminations}
          <br />
          <b>Assists</b>: {average_stats.assists}
          <br />
          <b>Deaths</b>: {average_stats.deaths}
          <br />
          <b>Damage</b>: {average_stats.damage}
          <br />
          <b>Healing</b>: {average_stats.healing}
        </Typography>
        <span className="border-top__left" />
        <span className="border-top__right" />
      </CardContent>
    </Card>
  )
}

export default AverageKDA
