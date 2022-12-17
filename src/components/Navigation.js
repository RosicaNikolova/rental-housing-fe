import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import {NavLink, useNavigate} from "react-router-dom"
import AuthenticationService from '../services/AuthenticationService';
import useAuth from "../hooks/useAuth";
import setNavigation from "../services/NavigationManager";

function Navigation() {

    //const navigate = useNavigate();
    // const { setAuth, user } = useAuth();
    // const logout = async () => {
    //     setAuth(false);
    //     console.log("logout");
    //     navigate('/login');
    // }
    // const [currentUser, setCurrentUser] = useState(undefined);
    // useEffect(
    //     ()=>{
    //         const user = AuthenticationService.getCurrentUser();
    //         if(user){
    //             setCurrentUser(user);
    //             console.log("render");
    //         }
    //     }, 
    //     []
    // );
    var links = [];
    const {auth} = useAuth();
    const role = auth.roles;
    links = setNavigation(role);
    
    //get user from local storage
    //create navigation if user exists: logout if it does not login
    

    return (
        <nav>
            <ul>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink to={link.path}>
                                {link.text}
                            </NavLink>
                            {/* Add NavLink here */}
                        </li>
                    )
                })}

                {/* <li>
                <button type='button' onClick={logout}>Logout</button>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navigation;