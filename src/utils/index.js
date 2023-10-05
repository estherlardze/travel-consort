import axios from 'axios';


const BASE_URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const fetchData = async(sw, ne) => {
    try {
        const {data: {data}} = await axios.get(BASE_URL, {
          
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
