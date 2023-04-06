import React from 'react'
import { Box, Typography, Avatar, Badge } from '@mui/material'

const PlayerSummary = ({ playerInfo }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar
        alt={`${playerInfo.summary.username} avatar`}
        src={playerInfo.summary.avatar}
        sx={{ width: 120, height: 120 }}
      />
      <Box sx={{ ml: 4 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {playerInfo.summary.username}
        </Typography>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <Avatar
              alt="Endorsement Level"
              src={playerInfo.summary.endorsement.frame}
              sx={{ width: 32, height: 32 }}
            />
          }
          sx={{ mb: 1 }}
        >
          <Avatar
            alt="Name Card"
            src={playerInfo.summary.namecard}
            sx={{ width: 80, height: 80 }}
          />
        </Badge>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Endorsement Level: {playerInfo.summary.endorsement.level}
        </Typography>
      </Box>
    </Box>
  )
}

export default PlayerSummary
