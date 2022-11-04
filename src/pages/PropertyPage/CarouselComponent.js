import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ItemCarousel from './ItemCarousel';
import photo from "./photo-1600585154340-be6161a56a0c.jpg";
import photo1 from "./houses_and_land-5bfc3326c9e77c0051812eb3.jpg";
import { Box} from '@mui/material'
import {StylesPropertyPage} from './StylesPropertyPage.css';


function CarouselComponent()
{
    var items = [
        {
            id: 1,
            description: photo
        },
        {
            id: 2,
            description: photo1
        }
    ]

    return (
        <Box flex={1} >
        <Carousel navButtonsAlwaysVisible={true} autoPlay={false}>
            {
                items.map( (item) => <ItemCarousel key={item.id} item={item} /> )
            }
        </Carousel>
        </Box>
    )
}

export default CarouselComponent;