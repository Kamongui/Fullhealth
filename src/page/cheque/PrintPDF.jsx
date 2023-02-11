import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useChequecontext } from '../../Context/ChequeContext'

const PrintPDF = () => {
  const { printData } = useChequecontext()
  const printRef = useRef()

  const printCheque = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'Cheque',
    onAfterPrint: () => alert('Print Success')
  })
  console.log(printData)
  return (
    <div>
      <div ref={printRef} className="chequePDF">
        <div>{printData[0].Date}</div>
        <div>{printData[0].Payee}</div>
        <div>{printData[0].Amount}</div>
      </div>
      <button onClick={printCheque}>Print out</button>
      <button>Back</button>
    </div>
  )
}

export default PrintPDF
