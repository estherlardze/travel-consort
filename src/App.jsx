import React, {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Places from './components/Places/Places';
import { fetchData } from './utils/index'

const App = () => {
 const [places, setPlaces] = useState([]);
 const [coordinates, setCoordinates] = useState({});
 const [bounds, setBounds] = useState({});
 const [isloading, setIsLoading] = useState(false);
 const [type, setType] = useState('restaurants');
 const [rating, setRating] = useState(0);
 const [filteredPlaces, setFilteredPlaces] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}}) =>{
      setCoordinates({lat:latitude, lng:longitude});
    })
  }, [])

  useEffect(() => {
    const filteredPlaces = places?.filter((place) => place.rating > rating)

    setFilteredPlaces(filteredPlaces)
  }, [rating])

   useEffect(() =>{
    if (bounds) {
      setIsLoading(true);
   
    //console.log({bounds})
    fetchData(type, bounds.ne, bounds.sw).then((data) =>{
       console.log(bounds.sw)
       setPlaces(data)
       setFilteredPlaces([])
       setIsLoading(false)
    })
  }
}, [type, bounds])

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={2} style={{width:'100%', marginTop:'58px'}} >
        <Grid item xs={12} md={4}>
          <Places
           places={filteredPlaces ? filteredPlaces : places} 
           isloading={isloading} 
           rating={rating}
           setRating={setRating} 
           type={type}
           setType={setType}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
           places={filteredPlaces ? filteredPlaces : places}
           coordinates={coordinates} 
           setCoordinates={setCoordinates} 
           setBounds={setBounds}/>
        </Grid>
     </Grid>
    </> 
   
  )
}

export default App
