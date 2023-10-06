import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search'
import { AppBar, Toolbar, Typography, Box, InputBase } from '@material-ui/core';
import { Autocomplete } from '@react-google-maps/api';
import useStyles from './styles'

const Header = ({setCoordinates}) => {
  const [autocomplete, setAutocomplete] = useState(null)
  const classes = useStyles();

  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    setCoordinates({ lat, lng })
  }

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5'  className={classes.title}>
          Travel Consort
        </Typography>

        <Box display='flex'>
          <Typography variant='h6'  className={classes.title}>
            Explore new places
          </Typography>

         <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder='Search' classes={{root:classes.inputRoot, input:classes.inputInput}} inputProps={{ 'aria-label':'search' }}
              
            />
            </div>
         </Autocomplete> 
      </Box>
       </Toolbar>
    </AppBar>

  )
}

export default Header
