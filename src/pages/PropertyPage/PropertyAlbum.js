import React from 'react'
import { Box, Stack } from "@mui/material";
import CarouselComponent from './CarouselComponent';
import photo from "./photo-1600585154340-be6161a56a0c.jpg";
import {StylesPropertyPage} from './StylesPropertyPage.css';
import PropertyAlbumInfo from './PropertyAlbumInfo';

function PropertyAlbum(props) {

  return (
     <Box> 
    {/* bgcolor="blue" */}
        <Stack direction="row" justifyContent="space-evenly"> 
       <CarouselComponent />
       <Box flex={1}>
            <img className="imgProperty" src={photo}>
            </img>
         </Box>
       </Stack>
       <PropertyAlbumInfo property={props.property}/>
       

    </Box>
  )
}

export default PropertyAlbum;