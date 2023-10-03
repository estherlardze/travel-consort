import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search'
import { AppBar, Toolbar, Typography, Box, InputBase } from '@material-ui/core';
import { Autocomplete } from '@react-google-maps/api';
import useStyles from './styles'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const classes = useStyles()

  const handlesearch = (e) => {
    setSearchTerm(e.target.value)
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

         {/* <Autocomplete  */} 
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder='Search' classes={{root:classes.inputRoot, input:classes.inputInput}} inputProps={{ 'aria-label':'search' }}
              onChange={handlesearch} 
            />
            </div>
         {/*} </Autocomplete> */}   
      </Box>
       </Toolbar>
    </AppBar>

  )
}

export default Header
