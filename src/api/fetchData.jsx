import axios from "axios";

// For JSON-SERVER
// http://localhost:3500

// For FHProject
// http://localhost:4000

// database for cheque info
const fetchData = axios.create({
  baseURL:'http://localhost:3500'
})

export {fetchData}