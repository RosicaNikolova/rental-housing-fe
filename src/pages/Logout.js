import * as React from 'react';
import { Box } from "@mui/material";
import AuthenticationService from "../services/AuthenticationService";
import useAuth from '../hooks/useAuth';

function Logout(){

     console.log("logout");
     const { setAuth, user } = useAuth();
     setAuth(false);
     AuthenticationService.logout();
     console.log("logout: " + user + "local storage: " + JSON.parse(localStorage.getItem('user')));
    return(
        <Box>
            Logout
        </Box>
    )

}

export default Logout;


