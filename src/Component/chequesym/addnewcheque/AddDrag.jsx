import React from 'react'
import { useChequecontext } from '../../../Context/ChequeContext'

const AddDrag = ( {id, DragName, Price} ) => {
  const { inDrag, deDrag, rmDrag, getItem } = useChequecontext()

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
