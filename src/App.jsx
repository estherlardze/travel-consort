import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Places from './components/Places/Places';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={2} style={{width:'100%', marginTop:'58px'}} >
        <Grid item xs={12} md={4}>
          <Places />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
     </Grid>
    </> 
   
  )
}

export default App
