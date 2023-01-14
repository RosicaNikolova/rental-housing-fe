import React from 'react'
import { Box, Stack, Avatar } from '@mui/material'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import {StylesPropertyPage} from './StylesPropertyPage.css';


function PropertyAlbumInfo (props){

  return (
    <Box borderLeft="7px solid" borderColor="primary.main" bgcolor="LightCyan">
   <Stack direction="row">
    <Box flex={3} className="iconsText">{props.property.city}, {props.property.street} {props.property.streetNumber}</Box>
    <Box flex={1} className="iconsText">{props.property.price} €</Box>
    <Box flex={1} sx={{m: 1}}> 
        <Avatar className="avatarIcons" sx={{bgcolor: 'primary.main' }}>
            <BookmarkAddIcon />
          </Avatar>
          <div className="iconsText">{props.property.numberOfRooms} rooms</div>
          </Box>
    <Box flex={1} sx={{m: 1}}> 
        <Avatar className="avatarIcons" sx={{bgcolor: 'primary.main' }}>
            <BookmarkAddIcon />
          </Avatar>
          <div className="iconsText">{props.property.numberOfBedrooms} bedrooms</div>
    </Box>
    <Box flex={1} sx={{m: 1}}> 
        <Avatar className="avatarIcons" sx={{bgcolor: 'primary.main' }}>
            <BookmarkAddIcon />
          </Avatar>
          <div className="iconsText">{props.property.livingSpace} m2</div>
    </Box>

   </Stack>
    </Box>
  )
}


export default PropertyAlbumInfo