import React from 'react'
import { useChequecontext } from '../../../Context/ChequeContext'

const AddDrag = ( {id, DragName, Price} ) => {
  const { totalPrice, setTotalPrice } = useChequecontext()

  const getItem = (id) => {
    return totalPrice.find(item=>item.id === id)?.quantity || 0
  }
  const inDrag = (id,Price) => {
    setTotalPrice(current=>{
      if(current.find(item=>item.id === id) == null) {
        return [...current,
        {id:id,price:Price,quantity:+1}]
      } else {
        return current.map(item=>{
          if(item.id===id){
            return {...item,quantity:item.quantity+1}
          } else {
            return item
          }
        })
      }
    })
  }
  const deDrag = (id) => {
    setTotalPrice(current=>{
      if(current.find(item=>item.id === id)?.quantity === 1){
        return current.filter(item=>
          item.id !== id
        )} else {
        return current.map(item=>{
          if(item.id===id){
            return {...item,quantity:item.quantity-1}
          } else {
            return item
          }
        })
      }
    })
  }
  const rmDrag = (id) => {
    setTotalPrice(current=>{
      if(current.find(item=>item.id === id)?.quantity){
        return current.filter(item=>
          item.id !== id
        )
      }
    })
  }
  return (
    <tr>
      <td>{DragName}</td>
      <td> {Price} </td>
      <td>
        {(getItem(id) === 0)?
          <button onClick={()=>inDrag(id,Price)}>Add</button>:
          <span>
            <button onClick={()=>inDrag(id)}>+</button>
            <span>{getItem(id)}</span>
            <button onClick={()=>deDrag(id)}>-</button>
            <button onClick={()=>rmDrag(id)}>Remove</button>
          </span>
          }
      </td>
    </tr>
  )
}

export default AddDrag
