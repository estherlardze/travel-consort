import axios from 'axios';

const BASE_URL = 'https://travel-advisor.p.rapidapi.com'

export const fetchData = async(type,sw, ne) => {
    try {
        const {data: {data}} = await axios.get(`${BASE_URL}/${type}/list-in-boundary`, {
          
          params: {
            bl_latitude: sw.lat, 
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
         
        });
        
        return data;
    } catch (error) {
        console.error(error);
}}

