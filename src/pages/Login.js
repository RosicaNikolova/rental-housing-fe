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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import AuthenticationService from '../services/AuthenticationService';
import { useForm } from 'react-hook-form';
import { ThreeKOutlined } from '@mui/icons-material';



function Login(){

const theme = createTheme();

const [user, setUser] = useState(
  {
    email: "",
    password: ""
  }
)

//const initialValues = {email: "", password:""};


const[err, setErr] = useState("");
 
const {email, password} = user;

  
const onInputChange = (e)=>{
  setUser({...user,[e.target.name]:e.target.value})
  console.log(user)
}

var errorEmail = '';


const onSubmit = (e) =>{
  e.preventDefault();
  console.log(email);
  if(!checkEmail(email)){
  AuthenticationService.login(user)
    .then(response =>{ 
      console.log(response);
      setErr("Login Succesffull");
    })
    .catch(err => setErr("Ivalid credentials"));
  }
 };

 const checkEmail= (value) =>{
  if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)){
  errorEmail = 'Invalid Email';
  return true;
  }
  else{
    return false;
  }
 }
 


return(

<ThemeProvider theme={theme}>
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
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={(e) => onSubmit(e)}>
          {/* ={(e) => onSubmit(e)} */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=>onInputChange(e)}
              error={email?checkEmail(email) : false}
              helperText={errorEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>onInputChange(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
          
                <Link href= {`/register`} variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Box>{err}</Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );


}


export default Login;