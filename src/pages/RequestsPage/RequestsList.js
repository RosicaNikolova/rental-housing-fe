import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import InquiriesService from "../../services/InquiriesService";
import RequestCard from "./RequestCard";

function RequestsList(props){

    let navigate=useNavigate();

    //call backend with parameter
    //map the cards

    console.log('child render');
    const [inquiries, setInquiries] = useState(null);

    useEffect(() => {
        InquiriesService.getAllInquiries(props.requestType)
        .then((response) => {    
        setInquiries(response.data.requestDTOList);
        //console.log('call api');
       // console.log(response.data);
      })
      .catch((err) =>{
        if(err.response.status === 401){
          console.log("hello" + err.response.status);
          navigate("/login");
        }
        else if(err.response.status === 403){
          navigate("/forbidden");
        }
      });
      ;
    }, [props]);
  
    if (!inquiries) return (<div>No requests</div>);

    console.log('child render');

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

