import * as React from 'react';
import { Box } from "@mui/material";
import AuthenticationService from "../services/AuthenticationService";
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Logout(){

    let navigate = useNavigate();
    const { setAuth, user } = useAuth();
    setAuth(false);
    AuthenticationService.logout();
    navigate("/login");
}

export default Logout;


