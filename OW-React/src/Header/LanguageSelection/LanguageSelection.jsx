import React from 'react'
import { useContext } from 'react'
import { FormControl, InputBase, MenuItem, Select, styled } from '@mui/material'
import languageContext from '../../languageContext.jsx'

const SelectStyle = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiSvgIcon-root ': {
    fill: '#031950 !important',
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #031950',
    fontSize: 14,
    padding: '10px 26px 10px 12px',
    color: '#031950',
    '&:hover': {
      borderColor: '#031950',
    },
    '&:focus': {
      borderRadius: 4,
      borderColor: '#031950',
      boxShadow: '0 0 0 0.2rem rgba(255,255,255,.10)',
    },
  },
}))

const LanguageSelection = () => {
  const { language, changeLanguage, languageList } = useContext(languageContext)

  return (
    <FormControl>
      <Select
        id="languageSelect"
        value={language}
        onChange={(e) => {
          changeLanguage(e.target.value)
        }}
        input={<SelectStyle />}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
        }}
      >
        {languageList.map((language, id) => (
          <MenuItem key={id} value={language}>
            {language.slice(0, 2).toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default LanguageSelection
