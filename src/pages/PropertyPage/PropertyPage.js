import React from "react";
import { Box, Stack } from "@mui/material";
import PropertyAlbum from "./PropertyAlbum";
import PropertyInfo from "./PropertyInfo";
import RightBar from "./RightBar";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


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
    const url = `http://localhost:8080/properties/${id}`;


    useEffect(() =>
    {
        axios.get(url).then((response) => {
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