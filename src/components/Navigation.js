import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react"
import {NavLink} from "react-router-dom"
import useAuth from "../hooks/useAuth";
import AuthenticationService from "../services/AuthenticationService";
import setNavigation from "../services/NavigationManager";
import {Styles} from '../pages/OverviewPropertiesPage/PropertyCard.css';


function Navigation() {

    //const navigate = useNavigate();
    // const { setAuth, user } = useAuth();
    // const logout = async () => {
    //     setAuth(false);
    //     console.log("logout");
    //     navigate('/login');
    // }
    // const [currentUser, setCurrentUser] = useState(undefined);
    // useEffect(()=>{
            //   const user = AuthenticationService.getCurrentUser();
            //   if(user){
            //       console.log(user.roles[0]);
            //   }
    //      }, []);

    var links = [];
    const {auth} = useAuth();
    const role = auth.roles;
    console.log("Roles use auth:" + role);
    links = setNavigation(role);
        
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    HOUSING APP
                </Typography>
                <Stack direction='row' spacing={2}>
            {links.map(link => {
                    return (
                        <Box key={link.id}>
                         {/* <li key={link.id}> */}
                            <NavLink to={link.path} className="navigation-links">
                                {link.text}
                            </NavLink>
                         {/* </li> */}
                        </Box>
                    )
                })}
            </Stack>
            </Toolbar>    
          {/* <nav>
             <ul>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink to={link.path}>
                                {link.text}
                            </NavLink>
                        </li>
                    )
                })}
             </ul>
         </nav> */}
        </AppBar>

    )
}

export default Navigation;