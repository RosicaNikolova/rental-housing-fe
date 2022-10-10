import React from "react"
import Property from "../components/Property"


function PropertiesList(props) {

  
  return (

    <section className="property-grid grid">
      <div className="container">
        <div className="row">
        {props.properties.map(
          (property) =>
          <Property property={property}/>           
        )}
          {/* {JSON.stringify(props.properties)} */}
        </div>
      </div>
    </section>
    
  )
}

export default PropertiesList;