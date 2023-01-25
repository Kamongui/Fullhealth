import {DragData} from '../api/DragData'

//Get the drag's data of cheque
export const getDragData = () => DragData.get('/drag')

//create a new info of cheque
// export const createNewcheque = (newdata) => DragData.post('/data', newdata)

//update the info of cheque
// export const updateCheque = (id, newdata) => DragData.put(`/data/${id}`,newdata)

//delete the cheque info
// export const deleteCheque = (id) => DragData.delete(`/data/${id}`)