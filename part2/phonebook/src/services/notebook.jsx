import axios from "axios";

const baseUrl = 'http://localhost:3002/persons';

const create = newObj => {
    const response = axios.post(baseUrl, newObj);
    return response.then(res => res.data);
};

const getAll = () => {
    const response = axios.get(baseUrl);
    return response.then(res => res.data);
}

const update = (id, newObj) => {
    const request = axios.put(`${baseUrl}/${id}`, newObj)
}

const updateAll = (newObj) => {
    console.log(newObj);
    return  axios.put(baseUrl, newObj).then(res=>res.data)
}

const deleteItem = (id) => {
    const response = getAll();
    return response.then(res => {
        const data = res.data;
        const newData = data.filter(i => i.id !== id);

        return updateAll(newData)
    }).catch((re)=>{
        console.log(re);
    })
}

export default {create, getAll, deleteItem}