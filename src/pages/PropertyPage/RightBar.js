import React from 'react'
import { Avatar, Box } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';


function RightBar(){
  return (
    <Box bgcolor="primary.main" flex={1} sx={{mt: 3, ml: 3, color: 'white'}}>
      <Box sx={{m: 4}}>
    <Avatar className="avatarIcons" sx={{bgcolor: 'primary.main'}}>
    <ChatIcon fontSize="large"/>
  </Avatar>
    <Box sx={{textAlign: "center", }}>
      For more information about this property contact the homeowner  
    </Box>
    </Box>
    </Box> 
  )
}

export default RightBar;

