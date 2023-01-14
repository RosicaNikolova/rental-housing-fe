import React from "react";
import PropertiesList from './OverviewPropertiesPage/PropertiesList';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PropertiesService from "../services/PropertiesService";



function PropertiesPage(){

  //properties - the value, setProperties - function that updates the state and triggers rerendering of the component

  const [properties, setProperties] = useState(null);

  const url = "http://localhost:8080/properties";

  // const loadUsers = async() =>{
  //   const result = await axios.get(url)
  //   console.log(result.data)
  // };

  //PropertiesService.getAll();
  
  useEffect(() => {
    //loadUsers();
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