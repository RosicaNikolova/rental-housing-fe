import React from "react";
import { Box, Stack } from "@mui/material";
import PropertyAlbum from "./PropertyAlbum";
import PropertyInfo from "./PropertyInfo";
import RightBar from "./RightBar";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropertiesService from "../../services/PropertiesService";


function PropertyPage(){

    const [property, setProperty] = useState({
        "price": "",
        "propertyType": "",
        "city": "",
        "street": "",
        "postCode": "",
        "streetNumber": "",
        "livingSpace": "",
        "numberOfRooms": "",
        "numberOfBedrooms": "", 
        "propertyStatus": ""
    });

    const {id} = useParams();

    useEffect(() =>
    {
        PropertiesService.get(id)
        .then((response) => {
            setProperty(response.data);
            console.log(property);
        });
    }, []);

    if(property)
    return(  
        <Box>
            <PropertyAlbum property={property}/>
            <Stack direction="row" justifyContent="space-evenly">
            <PropertyInfo property={property}/>
            <RightBar/>
            </Stack>    
        </Box>  
    );

}


export default PropertyPage;