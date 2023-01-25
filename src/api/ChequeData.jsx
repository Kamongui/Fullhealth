import axios from "axios";

// database for cheque info
const chequeData = axios.create({
  baseURL:'http://localhost:3500'
})

export {chequeData}