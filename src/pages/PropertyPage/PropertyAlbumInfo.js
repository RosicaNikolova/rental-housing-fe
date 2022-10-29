import React from 'react'
import { Box, Stack, Avatar } from '@mui/material'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import {StylesPropertyPage} from './StylesPropertyPage.css';


function PropertyAlbumInfo (){

  return (
    <Box  bgcolor="orange">
   <Stack direction="row">
    <Box flex={3} bgcolor="pink" className="iconsText">Hello</Box>
    <Box flex={1} className="iconsText">355 euro </Box>
    <Box flex={1} bgcolor="green"> 
        <Avatar className="avatarIcons">
            <BookmarkAddIcon />
          </Avatar>
          <div className="iconsText">2 rooms</div>
          </Box>
          <Box flex={1}> 
        <Avatar className="avatarIcons">
            <BookmarkAddIcon />
          </Avatar>
          <div className="iconsText">2 rooms</div>
          </Box>
          <Box flex={1}> 
        <Avatar className="avatarIcons">
            <BookmarkAddIcon />
          </Avatar>
          <div className="iconsText">2 rooms</div>
          </Box>

   </Stack>
    </Box>
  )
}


export default PropertyAlbumInfo