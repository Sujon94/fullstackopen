import axios from "axios";

const baseUrl = 'http://localhost:3002/persons';

const create = newObj =>{
    const response = axios.post(baseUrl, newObj);
    return response.then(res=>res.data);
};

const getAll = ()=>{
    const response = axios.get(baseUrl);
    return response.then(res=>res.data);
}

const update = (id, newObj) => {
    const request = axios.put(`${baseUrl}/${id}`, newObj)
}

export default {create, getAll}