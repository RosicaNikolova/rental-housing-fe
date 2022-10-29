import React from "react";
import { Box, Stack } from "@mui/material";
import PropertyAlbum from "./PropertyAlbum";
import PropertyInfo from "./PropertyInfo";
import RightBar from "./RightBar";


function PropertyPage(){

    return(  
        <Box>
            <PropertyAlbum/>

            <Stack direction="row" justifyContent="space-evenly">
            <PropertyInfo/>
            <RightBar/>
            </Stack>
        
        </Box>
      
 
    
    );

}


export default PropertyPage;