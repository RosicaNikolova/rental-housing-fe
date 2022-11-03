import React from "react";
import RequestCard from "./RequestCard";

function RequestsList(props){

    return(
        <div>
        <div>
           { props.requestType}
        </div>
        <RequestCard/>
        <RequestCard/>

        </div>
    )
}
export default RequestsList

