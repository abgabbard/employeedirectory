import axios from "axios";

function usersList() {
  return axios.get("https://randomuser.me/api/?results=25&nat=US");
}

export default { usersList };