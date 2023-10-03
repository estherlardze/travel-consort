import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Typography, Paper, useMediaQuery } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOnOutlined';
import useStyles from './styles'

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)');
  const coordinates = {lat: 0, lng: 0};
  console.log(import.meta.env.VITE_REACT_GOOGLE_MAPS_API_KEY)
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_REACT_GOOGLE_MAPS_API_KEY}}
        defaultCenter={coordinates}
        defaultZoom={isMobile? 12 : 14}
        center={coordinates}
       margin={[50, 50, 50, 50]}
       options={''}
       onChange={''}
       onChildClick={''}
       
      >
      </GoogleMapReact>
    </div>
    
   
  )
}

export default Map
