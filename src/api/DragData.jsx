import axios from "axios";

// database for drag
const DragData = axios.create({
  baseURL:'http://localhost:3500'
})

export {DragData}