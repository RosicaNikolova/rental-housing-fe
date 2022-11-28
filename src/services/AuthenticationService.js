import axios from 'axios';
import api from './http-common';

 const login = (user) => {
        return api.post(`/login`, user)
           .then((response) => {
             if(response.data.accessToken){
                 localStorage.setItem("user", JSON.stringify(response.data));
             }
             return response.data;
           });
   };

const logout = () => {
    localStorage.removeItem("user");
}

const register = (data) =>{
   return api.post(`/register`, data);
}

const getCurrentUSer = () => {
    return JSON.parse(localStorage.getItem('user'));

}

const AuthenticationService = {
    login,
    logout,
    register,
    getCurrentUSer
  };

  export default AuthenticationService;
