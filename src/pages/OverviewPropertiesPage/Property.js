import { Avatar, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack } from "@mui/material";
import React from "react"
import photo from "./photo-1600585154340-be6161a56a0c.jpg"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LivingIcon from '@mui/icons-material/Living';
import { Link } from "react-router-dom";

function Property(props) {

  const address = props.property.street +" "+ props.property.streetNumber;
  const livingSpace = props.property.livingSpace + "m2";
  const price = props.property.price + "€";
  return (
    <Grid item xs={4}>
    <Paper elevation={8} square>
    <img className= "imgProp" src={photo}></img>         
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     <ListItem>
       <ListItemAvatar>
         <Avatar sx={{bgcolor: 'primary.main' }}>
           <LocationOnIcon />
         </Avatar>
       </ListItemAvatar>
       <ListItemText primary={props.property.city} secondary={address}/>
     </ListItem>
     <ListItem>
       <ListItemAvatar>
         <Avatar sx={{bgcolor: 'primary.main' }}>
           <LivingIcon />
         </Avatar>
       </ListItemAvatar>
       <ListItemText primary={livingSpace}/>
     </ListItem>
     <ListItem>
       <ListItemAvatar>
         <Avatar sx={{bgcolor: 'primary.main' }}>
           <AttachMoneyIcon />
         </Avatar>
       </ListItemAvatar>
       <ListItemText primary={price}/>
     </ListItem>
   </List>
  
   <Stack
 direction="row"
 justifyContent="space-evenly"
 alignItems="center"
 spacing={2}
 p={2}>

     <Button variant="outlined">
       {/* View */}

       <Link to={`/Property/${props.property.id}`} className="view-link">
        View
       </Link>
     </Button> 
     {/* <Button variant="contained" startIcon={<BookmarkAddIcon></BookmarkAddIcon>}>
       Save
     </Button> */}
     </Stack>
       </Paper> 
       </Grid>
    
  )
}

export default Property;