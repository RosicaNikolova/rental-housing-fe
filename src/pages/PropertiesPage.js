import React from "react";
import PropertiesList from '../components/PropertiesList';
import axios from "axios";



function PropertiesPage(){

  const [properties, setProperties] = React.useState(null);

  const baseURL = "http://localhost:8080/properties";
  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProperties(response.data);
    });
  }, []);

  if (!properties) return null;

  return (
    <div>
      <PropertiesList properties = {properties}/>
    </div>
  );
}
export default PropertiesPage;