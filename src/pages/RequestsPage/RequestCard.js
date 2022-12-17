import React from "react";
import { Box, Button, Card } from '@mui/material';
import { Stack } from "@mui/system";

function RequestCard(props){

    //save the request and rerender

    return(
        <Card sx={{bgcolor: "skyblue", p: 4}}>
            <Stack spacing={2} bgcolor="green" sx={{p: 4}}>
            <Box bgcolor='orange'>
            <Stack direction="row" justifyContent="space-between">
            <h4>
                {props.inquiry.property.city}, {props.inquiry.property.street} {props.inquiry.property.streetNumber}
                </h4>
               <div>Publish Date: {props.inquiry.date}</div>
            </Stack>
              
            </Box>
            <Box  bgcolor='pink'>
                Homeowner: {props.inquiry.homeownerFirstName} {props.inquiry.homeownerLastName}
            </Box>
            <Box  bgcolor='orange'>
            <Stack direction="row" spacing={25}>
                <Box>
                   PropertyType: {props.inquiry.property.propertyType}
                </Box>
                <Box>
                   Rent: {props.inquiry.property.price} euro
                </Box>
                <Box>
                   Sqaure meters: {props.inquiry.property.livingSpace} m2
                </Box>

            </Stack>
            </Box>
            <Box bgcolor='white'>
            <Stack direction="row" justifyContent="space-evenly">
                <Button>Accept</Button>
                <Button>Reject</Button>
            </Stack>
            </Box>
           
            </Stack>
        
        </Card>
       
    )
}
export default RequestCard