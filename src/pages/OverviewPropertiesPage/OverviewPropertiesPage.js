import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PropertiesList from "./PropertiesList";
import PropertiesService from "../../services/PropertiesService";

function PropertiesPage(){

  //properties - the value, setProperties - function that updates the state and triggers rerendering of the component

  const [properties, setProperties] = useState(null);

  
  useEffect(() => {
    PropertiesService.getAll()
        .then((response) => {
        setProperties(response.data);
      })
      // .catch((err) =>{
      //   if(err.response.status === 401){
      //     console.log("hello" + err.response.status);
      //     navigate("/login");
      //   }
      // });
      ;
  }, []);

  if (!properties) return (<div>No properties</div>);

  return (

    <PropertiesList properties={properties.properties}/>
    
  );
}
export default PropertiesPage;