import React from "react";
import { Box,Card } from '@mui/material';
import { Stack } from "@mui/system";

function MyRequestCard(props){

    return(
        <Card sx={{bgcolor: "primary.main", p: 4, borderRadius: 0}}>
            <Stack spacing={2} bgcolor="white" sx={{p: 4}}>
            <Box bgcolor=''>
            <Stack direction="row" justifyContent="space-between">
            <h4>
                {props.inquiry.property.city}, {props.inquiry.property.street} {props.inquiry.property.streetNumber}
                </h4>
               <div>Publish Date: {props.inquiry.date}</div>
            </Stack>
              
            </Box>
            <Box  bgcolor=''>
                Homeowner: {props.inquiry.homeownerFirstName} {props.inquiry.homeownerLastName}
            </Box>
            <Box  bgcolor=''>
            <Stack direction="row" spacing={20}>
                <Box>
                   PropertyType: {props.inquiry.property.propertyType}
                </Box>
                <Box>
                   Rent: {props.inquiry.property.price} euro
                </Box>
                <Box>
                   Sqaure meters: {props.inquiry.property.livingSpace} m2
                </Box>
                <Box>
                    {props.inquiry.status}
                </Box>

            </Stack>
            </Box>        
           </Stack>
        
        </Card>
       
    )
}
export default MyRequestCard;