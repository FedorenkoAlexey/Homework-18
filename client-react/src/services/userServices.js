import axios from "axios";
const BASE_URL = "http://localhost:5000";

export default class userService {
  getAll = async () => {
    let res = await axios.get(`${BASE_URL}/users`);
    return res.data || [];
  };

  deleteUser = async id => {
    let res = await axios.get(`${BASE_URL}/users/del/${id}`);
    return res.data;
  };

  updateUser = async data => {
    // console.log("SERV_PUT_DATA", data);
    let res = await axios.put(`${BASE_URL}/users/${data._id}`, data);
    return res.data;
  };

  createUser = async data => {
    // console.log("POST_DATA", data);
    let res = await axios.post(`${BASE_URL}/users/add/${data.name}`, data);
    return res.data;
  };
}
