import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InquiriesService from "../../services/InquiriesService";
import MyRequestCard from "./MyRequestCard";

function MyInquiriesPage(){

    let navigate=useNavigate();
   
    const [inquiries, setInquiries] = useState(null);

    useEffect(() => {
        InquiriesService.getInquiriesForUser()
        .then((response) => {
        setInquiries(response.data.requestDTOList);
        console.log('call api');
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
    }, []);
  
    if (!inquiries) return (<div>No Inquiries</div>);

    return(
        <div>

        {inquiries.map(
           (inquiry, index) =>
           <MyRequestCard key ={index} inquiry={inquiry}/>           
         )}
        </div>
    )
}
export default MyInquiriesPage;

