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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { InputLabel, FormControl, Select, MenuItem, FormHelperText } from '@mui/material';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePropertyPage(){

let navigate=useNavigate();

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
    idHomeowner: 1
  }
)

const {city, street, streetNumber, postCode, propertyType, livingSpace, numberOfRooms, numberOfBedrooms, price, propertyStatus} = property;

const onInputChange = (e)=>{
  setProperty({...property,[e.target.name]:e.target.value})
  console.log(property)
}


const onSubmit = async(e) =>{
 e.preventDefault();

 await axios.post("http://localhost:8080/requests", property);
 navigate("/properties");

}

// const [typeProperty, setTypeProperty] = useState('');

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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
          <Grid container justifyContent="flex-end">
            <Grid item>
              *After submitting this form your request should be approved within 3 working days and be visible for all users.
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
//   </ThemeProvider>

);

}

export default CreatePropertyPage;