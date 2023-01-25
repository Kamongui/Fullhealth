import React from 'react'
import { useChequecontext } from '../Context/ChequeContext'

const Printpage = () => {
  const { data, print } = useChequecontext()

  return (
    <div>
      Printpage
      {print}
    </div>
  )
}

export default Printpage
