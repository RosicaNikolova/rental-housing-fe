import authHeader from "./auth-header";
import api from './http-common';


const getAllInquiries = status =>{
    return api.get(`/requests?status=${status}`, {headers: authHeader()});
}

const getInquiriesForUser = () =>{
  return api.get(`/requests/homeowner`, {headers: authHeader()});
}

const createInquiry = property =>{
  return api.post(`/requests`, property, {headers: authHeader()});
}

  const InquiriesService = {
    getAllInquiries,
    getInquiriesForUser,
    createInquiry
  };

  export default InquiriesService;