import React from 'react'
import { useChequecontext } from '../../Context/ChequeContext'
import AddDrag from '../../Component/chequesym/addnewcheque/AddDrag'

const ChooseDrag = () => {
  const { dragData } = useChequecontext()
  return (
    <table className='productlist'>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {dragData.map((data) => 
          <AddDrag key={data.id} {...data} />
        )}
      </tbody>
      
    </table>
  )
}

export default ChooseDrag
