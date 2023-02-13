import React from 'react'
import { useChequecontext } from '../../Context/ChequeContext'
import AddDrag from '../../Component/chequesym/addnewcheque/AddDrag'

const ChooseDrag = () => {
  const { dragData } = useChequecontext()
  return (
    <div>
      {dragData.map((data) => 
            <div key={data.id}>
              <AddDrag {...data} />
            </div>
          )}
    </div>
  )
}

export default ChooseDrag
