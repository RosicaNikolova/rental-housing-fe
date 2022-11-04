import { Grid } from "@mui/material";
import React from "react"
import Property from "./Property"


function PropertiesList(props) {
 
  return (

    <Grid container spacing={2}>
          {props.properties.map(
           (property, index) =>
           <Property key ={index} property={property}/>           
         )}
    </Grid>


    // <section className="property-grid grid">
    //   <div className="container">
    //     <div className="row">
    //     {props.properties.map(
    //       (property) =>
    //       <Property property={property}/>           
    //     )}
    //       {/* {JSON.stringify(props.properties)} */}
    //     </div>
    //   </div>
    // </section>
    
  )
}

export default PropertiesList;