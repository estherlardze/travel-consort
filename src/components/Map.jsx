import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const coordinates = {lat: 0, lng: 0};
  
  return (
    <div>
      <GoogleMapReact
       bootstrapURLKeys = {{key: 'AIzaSyCoqMHn97i2_HB7xyQqcXEsVGnVXoPAIHI'}}
       defaultCenter = {coordinates}
       center = {coordinates}
       defaultZoom = {14}
       margin= {[50, 50, 50, 50]}
      >
        
      </GoogleMapReact>
    </div>
    
    // "AIzaSyCoqMHn97i2_HB7xyQqcXEsVGnVXoPAIHI"
  )
}

export default Map
