import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PropertiesList from "./PropertiesList";



function PropertiesPage(){

  //properties - the value, setProperties - function that updates the state and triggers rerendering of the component

  const [properties, setProperties] = useState(null);

  const baseURL = "http://localhost:8080/properties";
  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProperties(response.data);
      console.log(properties.properties);
    });
  }, []);

  if (!properties) return null;

  return (

    <PropertiesList properties={properties.properties}/>
    

    // <div>

    //   <PropertiesList properties = {properties.properties}/>
    // </div>
  );
}
export default PropertiesPage;