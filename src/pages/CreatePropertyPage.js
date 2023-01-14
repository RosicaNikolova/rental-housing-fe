import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import InquiriesService from '../services/InquiriesService';

function CreatePropertyPage(){

  let navigate=useNavigate();
  const {auth} = useAuth(); 
  
  const role = auth.roles;

  useEffect(()=>{
    if(!role){
      console.log("no role");
      navigate("/login");
    }
    else{
    if(role[0] !== "HOMEOWNER"){
      console.log("/wrong role");
      navigate("/forbidden");
  }
}
  }, []);
 
const [message, setMessage] = useState('');


const [property, setProperty] = useState(
  {
    city: "",
    street: "",
    streetNumber: "",
    postCode: "",
    propertyType: "",
    livingSpace: "",
    numberOfRooms: "",
    numberOfBedrooms: "", 
    price: "",
    propertyStatus: "INACTIVE",
    idHomeowner: ""
  }
)

const {city, street, streetNumber, postCode, propertyType, livingSpace, numberOfRooms, numberOfBedrooms, price, propertyStatus} = property;

const onInputChange = (e)=>{
  setProperty({...property,[e.target.name]:e.target.value})
}

const onSubmit = (e) =>{
  e.preventDefault();
  console.log(property);
  InquiriesService.createInquiry(property)
    .then(response =>{ 
      console.log(response);
       if(response.request.status === 201){
        setMessage("You request has been submitted successfully you can check it on My Requests Page");
       }
       else{
        setMessage("An error occured while creating the property. Please, try again later.")
       }
    })
    .catch(err => setMessage("All fields must be filled in. Please, try again."));
    ; 
 };

// const handleTypeChange = (event) => {
//   setTypeProperty(event.target.value);
//   console.log(typeProperty);
// };

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
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <AddHomeWorkIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create your listing
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={(e) => onSubmit(e)}>
            {/* onSubmit={handleSubmit} */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="city"
                name="city"
                required
                fullWidth
                id="city"
                label="City"
                autoFocus
                value={city}
                onChange={(e)=>onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="street"
                label="Street"
                name="street"
                autoComplete="street"
                value={street}
                onChange={(e)=>onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="streetN"
                label="Street Number"
                name="streetNumber"
                autoComplete="streetN"
                value={streetNumber}
                onChange={(e)=>onInputChange(e)}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="postCode"
                label="Post Code"
                type="postCode"
                id="postCode"
                autoComplete="postCode"
                value={postCode}
                onChange={(e)=>onInputChange(e)}

              />
            </Grid>

            <Grid item xs={12}>
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Property type</InputLabel>
  <Select
    labelId="propertyType"
    id="propertyType"
    label="Type of account"
    name="propertyType"
    value={propertyType}
    onChange={(e)=>onInputChange(e)}
    >
    <MenuItem value="HOUSE">House</MenuItem>
    <MenuItem value="APARTMENT">Apartment</MenuItem>
    <MenuItem value="STUDIO">Studio</MenuItem>
    <MenuItem value="ROOM">Room</MenuItem>

  </Select>

</FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="livingSpace"
                label="Space"
                type="space"
                id="space"
                autoComplete="space"
                value={livingSpace}
                onChange={(e)=>onInputChange(e)}

              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="numberOfRooms"
                label="Number of rooms"
                type="rooms"
                id="rooms"
                autoComplete="rooms"
                value={numberOfRooms}
                onChange={(e)=>onInputChange(e)}

              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="numberOfBedrooms"
                label="Number of bedrooms"
                type="bedrooms"
                id="bedrooms"
                autoComplete="bedrooms"
                value={numberOfBedrooms}
                onChange={(e)=>onInputChange(e)}

              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="price"
                label="Price"
                type="price"
                id="price"
                autoComplete="price"
                value={price}
                onChange={(e)=>onInputChange(e)}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create a listing
          </Button>
          {/* <Grid container justifyContent="flex-end">
            <Grid item>
              *After submitting this form your request should be approved within 3 working days and be visible for all users.
            </Grid>
          </Grid> */}
        </Box>
        <Box sx={{color: "primary.main", mb: 10}}>{message}</Box>

      </Box>
    </Container>

    
//   </ThemeProvider>
);

}


export default CreatePropertyPage;