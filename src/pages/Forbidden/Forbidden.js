import React from "react";
import { Box, Typography } from "@mui/material";

function Forbidden(){
    return(
        <Box>
        <Typography variant='h3' component='div' sx={{textAlign: 'center', m:4}}>         
            Error 403 - Forbidden     
        </Typography>
        <Typography variant='h6' component='div' sx={{textAlign: 'center'}}>         
            You are not authorized to access this page. 
    </Typography>
    </Box>
    
    )
}

export default Forbidden;


