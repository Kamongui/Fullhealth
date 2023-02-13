import axios from "axios";

// For JSON-SERVER
// http://localhost:3500

// For FHProject
// http://localhost:4000

// database for cheque info
const fetchData = axios.create({
  baseURL:'http://localhost:4000'
})

export const chequeEndpt = '/cheque';
export const dragEndpt = '/drag';
export const supplierEndpt = '/supplier';


//For cheque data
//Get the info of cheque
export const getChequeData = async () => {
  const res = await fetchData.get(chequeEndpt);
  return res.data
}

//create a new info of cheque
export const createNewcheque = async (newdata, olddata) => {
  // await delay()
  const res = await fetchData.post(chequeEndpt, newdata)
  return [...olddata,res.data]
}

//update the info of cheque
export const updateCheque = async (_id, newdata) => {
  const res = await fetchData.patch(`${chequeEndpt}/${_id}`,newdata)
  return res.data
} 
// export const updateCheque = async (id, newdata) => {
//   const res = await fetchData.patch(`${chequeEndpt}${id}`,newdata)
//   return res.data
// } 

//delete the cheque info
export const deleteCheque = (id) => fetchData.delete(`${chequeEndpt}${id}`)

// For Drag data
//Get the drag's data
export const getDragData = async () => {
  const res = await fetchData.get(dragEndpt)
  return res.data
}

// For Supplier data
//Get the supplier's data
export const getSupplierData = async () => {
  const res = await fetchData.get(supplierEndpt)
  return res.data
}