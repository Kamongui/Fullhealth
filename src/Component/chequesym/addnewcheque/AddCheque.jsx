import React, { useState, useEffect, useRef } from 'react'
import { useChequecontext } from '../../../Context/ChequeContext'
import { createNewcheque } from '../../../controller/DataController'

const Cheque = ({finalprice,setAdddrag,setAddcheque}) => {
  const idRef = useRef()
  
  const [date,setDate] = useState([])
  const [to,setTo] = useState('')
  const [signatory,setSignatory] = useState('')
  const [amount,setAmount] = useState(finalprice)
  
  const {data, setData, setTotalPrice } = useChequecontext()
  
  useEffect(()=>idRef.current.focus(),[])
  
  const handlesubmit = async (e) =>{
    e.preventDefault();
    const newdata = {"id":data[data.length-1].id+1,"Status":"-","Date":date,"Payee":to, "Amount":amount,"Signatory":signatory};
    try{
      await createNewcheque(newdata);
      const newChequearray = [...data,newdata]
      setData(newChequearray)
      setDate('');
      setTo('');
      setAmount('');
      setSignatory('')
      setTotalPrice([])
      setAdddrag(false);
      setAddcheque(false);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(data)
  return (
    <form onSubmit={handlesubmit} className='chequeForm'>
      <div>
        <label htmlFor="id">ID: </label><input type="number" ref={idRef} id="id"/>
      </div>
      <div>
        <label htmlFor="date">Date: </label><input type="date" id="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="to">To: </label><input type="text" id="to" value={to} onChange={(e)=>setTo(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="Signature">Sign Person: </label><input type="text" id="Signature" value={signatory} onChange={(e)=>setSignatory(e.target.value)} />
      </div>
      <div>
        <label htmlFor="Amount">Amount: </label><input type="number" id="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Cheque
