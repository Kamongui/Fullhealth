import axios from "axios";

// database for cheque info
const fetchData = axios.create({
  baseURL:'http://localhost:3500'
})

export {fetchData}