import {fetchData} from '../api/fetchData'

export const chequeEndpt = '/cheque'
export const dragEndpt = '/drag'

//For cheque data
//Get the info of cheque
export const getChequeData = async () => {
  const res = await fetchData.get(chequeEndpt);
  return res.data
}

//create a new info of cheque
export const createNewcheque = (newdata) => fetchData.post(chequeEndpt, newdata)

//update the info of cheque
export const updateCheque = (id, newdata) => fetchData.put(`${chequeEndpt}${id}`,newdata)

//delete the cheque info
export const deleteCheque = (id) => fetchData.delete(`${chequeEndpt}${id}`)

// For Drag data
//Get the drag's data
export const getDragData = () => fetchData.get(dragEndpt)

// For Supplier data
//Get the supplier's data
export const getSupplierData = () => fetchData.get('/suppiler')