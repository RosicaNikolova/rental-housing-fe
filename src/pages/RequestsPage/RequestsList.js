import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import InquiriesService from "../../services/InquiriesService";
import RequestCard from "./RequestCard";

function RequestsList(props){

    //call backend with parameter
    //map the cards

    console.log('child render');
    const [inquiries, setInquiries] = useState(null);

    useEffect(() => {
        InquiriesService.getAllInquiries(props.requestType)
        .then((response) => {
        setInquiries(response.data.requestDTOList);
        console.log('call api');
        console.log(response.data);
      });
    }, [props]);
  
    if (!inquiries) return (<div>No requests</div>);

    return(
        <div>

        {inquiries.map(
           (inquiry, index) =>
           <RequestCard key ={index} inquiry={inquiry}/>           
         )}


        </div>
    )
}
export default RequestsList

