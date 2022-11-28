import authHeader from "./auth-header";
import api from './http-common';


const getAllInquiries = status =>{
    return api.get(`/requests?status=${status}`, {headers: authHeader()});
}

  const InquiriesService = {
    getAllInquiries
  };

  export default InquiriesService;