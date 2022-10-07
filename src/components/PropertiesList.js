import React from "react"


function PropertiesList(props) {

  // newdata = Array.from(props.data);
  return (

    <ul>
      
      <li>{JSON.stringify(props)}</li> 
      {/* {props.map(([key,value])=> <li key={key}>{value}</li>)} */}

    
    </ul>
  )
}

export default PropertiesList;