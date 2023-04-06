import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

const PlayerRanks = ({ playerInfo }) => {
  const [ranks, setRanks] = useState()

  const renderRank = (role, key) => {
    if (role !== null) {
      return (
        <Box
          key={key}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '150px',
          }}
        >
          <Box
            sx={{
              width: '30px',
              height: '30px',
            }}
          >
            <img
              src={role.role_icon}
              alt="test"
              style={{ objectFit: 'contain', height: '100%', width: '100%' }}
            />
          </Box>
          <Box
            sx={{
              width: '70px',
              height: '70px',
            }}
          >
            <img
              src={role.rank_icon}
              alt="test"
              style={{ objectFit: 'contain', height: '100%', width: '100%' }}
            />
          </Box>
          <Typography>
            {role.division.charAt(0).toUpperCase() + role.division.slice(1)} {role.tier}
          </Typography>
        </Box>
      )
    } else return null
  }

  const renderRanks = (roles) => {
    const ranksArr = []
    for (const key in roles) {
      const value = roles[key]
      ranksArr.push(renderRank(value, key))
    }
    setRanks(ranksArr)
  }

  useEffect(() => {
    renderRanks(playerInfo.summary.competitive.pc)
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
        Rankings :
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '300px',
        }}
      >
        {ranks}
      </Box>
    </Box>
  )
}

export default PlayerRanks
