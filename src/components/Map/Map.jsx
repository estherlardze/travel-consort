import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Typography, Paper, useMediaQuery } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOnOutlined';
import useStyles from './styles'

const Map = ({coordinates, setCoordinates, setBounds}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)');
 

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_REACT_GOOGLE_MAPS_API_KEY}}
        defaultCenter={coordinates}
        defaultZoom={isMobile? 12 : 14}
        center={coordinates}
       margin={[50, 50, 50, 50]}
       options={''}
       onChange={(e) => {
         //console.log(e)
         setCoordinates({lat:e.center.lat, lng:e.center.lng})
         setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})
       }}
  >
      </GoogleMapReact>
    </div>
    
   
  )
}

export default Map
