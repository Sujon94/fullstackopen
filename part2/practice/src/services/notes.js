import axios from "axios";

const baseUrl = 'http://localhost:3001/notes'

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(res => res.data);
}

const getAll = () => {
    const request = axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        important: true
    }
    return request
        .then(res => res.data.concat(nonExisting));

}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(res => res.data);

}

export default {
    /*getAll: getAll,
      create: create,
      update: update
      or
      */
    getAll, create, update}