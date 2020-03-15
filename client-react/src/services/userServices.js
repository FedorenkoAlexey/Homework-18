import axios from "axios";
const BASE_URL = "http://localhost:5000";

export default class userService {
  getAll = async () => {
    let res = await axios.get(`${BASE_URL}/users`);
    return res.data || [];
  };
}
