import http from "../http-common";

const getAll = () =>{
    return http.get("/properties");
}

const get = id => {
    return http.get(`/properties/${id}`)
}

const create = data => {
    return http.post("/tutorials", data);
  };

const update = (id, data) => {
    return http.put(`/tutorials/${id}`, data);
  };

  const remove = id => {
    return http.delete(`/tutorials/${id}`);
  };


  const PropertiesService = {
    getAll,
    get,
    create,
    update,
    remove
  };

  export default PropertiesService;