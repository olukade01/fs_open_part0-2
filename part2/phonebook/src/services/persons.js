import axios from "axios";

const baseUrl = "/api/persons";

const getAll = () => axios.get(baseUrl).then((res) => res.data);

const create = (personObject) =>
  axios.post(baseUrl, personObject).then((res) => res.data);

const update = (id, updatedObject) =>
  axios.put(`${baseUrl}/${id}`, updatedObject).then((res) => res.data);

const delet = (id) => axios.delete(`${baseUrl}/${id}`).then((res) => res.data);

export default { getAll, create, update, delet };
