import api from './http-common';

const getAll = () =>{
    return api.get("/properties");
}

const get = id => {
    return api.get(`/properties/${id}`)
}

// const create = data => {
//     return api.post("/properties", data, {headers: authHeader()});
//   };

const update = (id, data) => {
    return api.put(`/properties/${id}`, data);
  };

  const remove = id => {
    return api.delete(`/properties/${id}`);
  };


  const PropertiesService = {
    getAll,
    get,
    //create,
    update,
    remove
  };

  export default PropertiesService;