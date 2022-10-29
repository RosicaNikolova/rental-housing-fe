import React from 'react';
import { Box } from '@mui/material'
import {StylesPropertyPage} from './StylesPropertyPage.css';



function ItemCarousel(props)
{
    return (
          <Box>
            <img className="imgProperty" src={props.item.description}>
            </img>
          </Box>
    )
}

export default ItemCarousel;