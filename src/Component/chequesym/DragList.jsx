import React, { useState, useEffect } from 'react'
import { useChequecontext } from '../../Context/ChequeContext'

const DragList = ( {id, DragName, Price} ) => {
  const { totalPrice, setTotalPrice } = useChequecontext()
  const [checked, setChecked] = useState(false)

  const handleChange = (data) => {
    setChecked(!checked)
    setTotalPrice([...totalPrice,Price])
    console.log(totalPrice)
  }

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        onChange = {handleChange}
      />
      <label htmlFor={id}>{DragName}</label>
      <span> {Price} </span>
      <span>Count</span>
      <button>+</button>
      <button>-</button>
    </div>
  )
}

export default DragList
