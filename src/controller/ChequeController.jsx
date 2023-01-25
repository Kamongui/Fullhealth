import {chequeData} from '../api/ChequeData'

//Get the info of cheque
export const getChequeData = () => chequeData.get('/data')

//create a new info of cheque
export const createNewcheque = (newdata) => chequeData.post('/data', newdata)

//update the info of cheque
export const updateCheque = (id, newdata) => chequeData.put(`/data/${id}`,newdata)

//delete the cheque info
export const deleteCheque = (id) => chequeData.delete(`/data/${id}`)