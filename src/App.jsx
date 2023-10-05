import React, {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Places from './components/Places/Places';
import { fetchData } from './utils/index'

const App = () => {
 const [places, setPlaces] = useState([]);
 const [coordinates, setCoordinates] = useState();
 const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}}) =>{
      setCoordinates({lat:latitude, lng:longitude});
    })
  }, [])

   useEffect(() =>{
    //console.log(bounds)
    fetchData(bounds.ne, bounds.sw)
    .then((data) =>{
      console.log(data)
       setPlaces(data)
    })
}, [coordinates, bounds])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={2} style={{width:'100%', marginTop:'58px'}} >
        <Grid item xs={12} md={4}>
          <Places places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds}/>
        </Grid>
     </Grid>
    </> 
   
  )
}

export default App
