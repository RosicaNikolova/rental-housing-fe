import React from "react";
import photo from "../components/photo-1600585154340-be6161a56a0c.jpg";
import { Paper, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Stack, Container} from "@mui/material";
import './UsersPage.css';
import LivingIcon from '@mui/icons-material/Living';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import InfoIcon from '@mui/icons-material/Info';

function UsersPage() {


  return (
  <Grid container spacing={2}>
  <Grid item xs={4}>
    
    <Paper elevation={8} square>
     <img className= "imgProp" src={photo}></img>   
        
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOnIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Amsterdam" secondary="Pisanostraat 72" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LivingIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="100m2"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AttachMoneyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="730 euro"/>
      </ListItem>
    </List>
   
    <Stack
  direction="row"
  justifyContent="space-evenly"
  alignItems="center"
  spacing={2}
  p={2}>
      <Button variant="outlined" startIcon={<InfoIcon />}>
        View
      </Button>
      <Button variant="contained" startIcon={<BookmarkAddIcon />}>
        Add to Watch List
      </Button>
      </Stack>
    

        </Paper> 
    
  </Grid> 
  <Grid item xs={4}>
    <Paper elevation={8} square>
 Hello
      
        </Paper> 
  </Grid> 
  <Grid item xs={4}>
    <Paper elevation={8} square>

        Hello
        </Paper> 
  </Grid> 
  <Grid item xs={4}>
    <Paper elevation={8} square>
        Hello
        </Paper> 
  </Grid> 
</Grid>

  );

}






export default UsersPage;