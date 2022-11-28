import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { InputLabel, FormControl, Select, MenuItem, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService'


function Register(){

  let navigate=useNavigate();

  const [user, setUser] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: ""
    }
  )
  
  const {firstName, lastName, email, password, role} = user;
  
  const onInputChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user)
  }


   const onSubmit = (e) =>{
    e.preventDefault();
    AuthenticationService.register(user);
  
   }
  

return(

    // <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={(e) => onSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(e)=>onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="last-name"
                value={lastName}
                onChange={(e)=>onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e)=>onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e)=>onInputChange(e)}
              />
            </Grid>

            <Grid item xs={12}>
            <FormControl fullWidth>
  <InputLabel id="role">Profile</InputLabel>
  <Select
    labelId="role"
    id="role"
    label="Role"
    name="role"
    required
    value={role}
    onChange={(e)=>onInputChange(e)}> 
    <MenuItem value="RENTER">Renter</MenuItem>
    <MenuItem value="HOMEOWNER">Homeowner</MenuItem>
  </Select>

</FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox required value="allowExtraEmails"/>}
                label="By clicking here, I agree to the terms and conditions."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color= 'secondary'
            sx={{ mt: 3, mb: 2}}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
           
              <Link href={`/login`} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
//   </ThemeProvider>

);

}

export default Register;