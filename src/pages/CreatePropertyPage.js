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


function CreatePropertyPage(){

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
        <Box component="form" noValidate sx={{ mt: 3 }}>
            {/* onSubmit={handleSubmit} */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="City"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Steet"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Street Number"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Post Code"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Property type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Type of account"
    required
  >
      {/* value={age} */}
{/* onChange={handleChange} */}
    <MenuItem value="Renter">House</MenuItem>
    <MenuItem value="HouseOwner">Apartment</MenuItem>
    <MenuItem value="HouseOwner">Studio</MenuItem>
    <MenuItem value="HouseOwner">Room</MenuItem>

  </Select>

</FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Space"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Number of rooms"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Number of bedrooms"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Price"
                type="password"
                id="password"
                autoComplete="new-password"
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