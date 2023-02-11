import {fetchData} from '../api/fetchData'

//For cheque data
//Get the info of cheque
export const getChequeData = () => fetchData.get('/cheque')

//create a new info of cheque
export const createNewcheque = (newdata) => fetchData.post('/data', newdata)

//update the info of cheque
export const updateCheque = (id, newdata) => fetchData.put(`/data/${id}`,newdata)

//delete the cheque info
export const deleteCheque = (id) => fetchData.delete(`/data/${id}`)

// For Drag data
//Get the drag's data
export const getDragData = () => fetchData.get('/drag')

// For Supplier data
//Get the supplier's data
export const getSupplierData = () => fetchData.get('/suppiler')