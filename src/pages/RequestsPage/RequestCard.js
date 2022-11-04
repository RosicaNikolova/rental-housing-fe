import React from "react";
import { Box, Button, Card } from '@mui/material';
import { Stack } from "@mui/system";


function RequestCard(){

    return(
        <Card sx={{bgcolor: "skyblue", p: 4}}>
            <Stack spacing={2} bgcolor="green" sx={{p: 4}}>
            <Box bgcolor='orange'>
            <Stack direction="row" justifyContent="space-between">
            <h4>
                Amsterdam, Pisanostraat 72
                </h4>
               <div>Publish Date: 01.10.2022</div>
            </Stack>
              
            </Box>
            <Box  bgcolor='pink'>
                Homeowner: Rositsa Nikolova
            </Box>
            <Box  bgcolor='orange'>
            <Stack direction="row" spacing={25}>
                <Box>
                   PropertyType: Apartment
                </Box>
                <Box>
                   Rent: 500 euro
                </Box>
                <Box>
                   Sqaure meters: 100m2
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