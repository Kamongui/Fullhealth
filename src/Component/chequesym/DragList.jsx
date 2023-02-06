import React from 'react'
import { useChequecontext } from '../../Context/ChequeContext'

const DragList = ( {id, DragName, Price} ) => {
  const { inDrag, deDrag, rmDrag, getItem } = useChequecontext()

  return (
    <div>
      <label htmlFor={id}>{DragName}</label>
      <span> {Price} </span>
      <span>
        {(getItem(id) === 0)?
          <button onClick={()=>inDrag(id,Price)}>Add</button>:
          <span>
            <button onClick={()=>inDrag(id)}>+</button>
            <span>{getItem(id)}</span>
            <button onClick={()=>deDrag(id)}>-</button>
            <button onClick={()=>rmDrag(id)}>Remove</button>
          </span>
          }
      </span>
    </div>
  )
}

export default DragList
