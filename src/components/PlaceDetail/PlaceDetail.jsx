import React from 'react'
import {Card, CardContent, CardMedia, CardActions, Box, Typography, Chip, Button} from '@material-ui/core';
import  LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import  Rating  from '@material-ui/lab/Rating';
import useStyles from './styles'

const PlaceDetail = ({place}) => {
  const classes = useStyles();
  
  return (
     <Card>
       <CardMedia 
        style={{ height:350}}
        image={place?.photo ? place.photo.images.large.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJB-6SHIe631e747mYHomAGgAiSxc_CuaDh1b-jGd3MRdoESkc5oLMk8LqRZ_WyxTw7s&usqp=CAU'}
        title={place?.name}
       />
       <CardContent>
         <Typography gutterBottom variant="h5">
           {place?.name}
         </Typography>
         <Box display='flex' justifyContent='space-between' alignItems='center' my={1}>
           <Rating value={Number(place?.rating)} readOnly/>
           <Typography variant='subtitle1'>Out of {place.num_reviews} {place?.num_reviews?.length > 1 ? 'reviews' : 'review'}  </Typography>
         </Box>
         <Box display='flex' justifyContent='space-between' alignItems='center' my={1}>
           <Typography variant='subtitle2'>Price</Typography>
           <Typography variant='subtitle2'>{place?.price_level ? place.price_level : '$' }</Typography>
         </Box>
         <Box display='flex' justifyContent='space-between' alignItems='center' my={1}>
           <Typography variant='subtitle2'>Ranking</Typography>
           <Typography variant='subtitle2'>{place?.ranking?.slice(0, 35)}</Typography>
         </Box>
        {place?.awards?.map((award) => (
          <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
            <img src={award?.images?.small} alt={award?.display_name} />
            <Typography variant='subtitle2'>{award.display_name}</Typography>
          </Box>
        ))}

        {place?.cuisine?.map((food) => (
          <Chip key={food.name} label={food.name} size='small' className={classes.chip}/>
        ))}
       
       {place?.address && (
         <Typography className={classes.subtitle} variant='subtitle2' gutterBottom >
           <LocationOnIcon style={{width:'30px', color: 'grey'}}/> {place.address.slice(0,40)}
         </Typography>
       )}

        {place?.phone && (
         <Typography className={classes.spacing} variant='subtitle2' gutterBottom>
            <PhoneIcon style={{width:'20px' , color: 'grey'}}/> {place.phone}
         </Typography>
       )} 
       
       <CardActions>
         {place?.web_url && 
          <Button color='primary' size='small' onClick={() => window.open(place?.web_url, '_blank')}>
          Trip consult
          </Button>}
        {place?.website && 
           <Button color='primary' size='small' onClick={() => window.open(place?.website, '_blank')}>
           website
         </Button> } 
       </CardActions>
       </CardContent>
     </Card>
  )
}

export default PlaceDetail
