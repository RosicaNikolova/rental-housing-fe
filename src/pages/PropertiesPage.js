import React from "react";
import PropertiesList from '../components/PropertiesList';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";



function PropertiesPage(){

  //properties - the value, setProperties - function that updates the state and triggers rerendering of the component

  const [properties, setProperties] = useState(null);

  const baseURL = "http://localhost:8080/properties";
  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProperties(response.data);
    });
  }, []);

  if (!properties) return null;

  return (
    <div>
      <PropertiesList properties = {properties.properties}/>
    </div>
  );
}
export default PropertiesPage;