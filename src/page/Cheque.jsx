import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChequeTitle from '../Component/chequesym/ChequeTitle'
import { useChequecontext } from '../Context/ChequeContext'
import DragList from '../Component/chequesym/DragList'
import AddCheque from '../Component/chequesym/addnewcheque/AddCheque'

const Cheque = () => {
  const [adddrag, setAdddrag] = useState(false)
  const [addcheque,setAddcheque] = useState(false)
  const { dragdata, totalPrice, setTotalPrice } = useChequecontext()
  
  // variable to save the cheque amount
  const finalprice = totalPrice.reduce((total, item)=>{
    return total + (item.price*item.quantity)
  },0)
  const openMenu = () => {
    setAdddrag(true)
  }
  const addbtn = () => {
    setAddcheque(true)
  }
  const backtodrag = () => {
    setAddcheque(false)
  }
  const closeMenu = () =>{
    setAdddrag(false)
    setAddcheque(false)
  }
  return (
    <>
      {/* Choose product(s) to pay supplier */}
      {(adddrag && !addcheque)?
        <div className='chequecomponent'>
          {dragdata.map((data,test) => 
            <div key={data.id}>
              <DragList {...data} />
            </div>
          )}
          <div>
            {finalprice}
          </div>
          <button onClick={addbtn}>Add</button>
          <br />
          <button onClick={()=>setTotalPrice([])}>Clear</button>
          <button onClick={closeMenu}>Close</button>
        </div>:(adddrag && addcheque)?
          <div className='chequecomponent'>
            <AddCheque 
              finalprice = {finalprice}
              setAdddrag = {setAdddrag}
              setAddcheque = {setAddcheque}
            />
            <button onClick={backtodrag}>Back</button>
            <button onClick={closeMenu}>Close</button>
            <br />
            {/* below btn only use in dev env */}
            <button onClick={()=>console.log(finalprice)}>Print cheque amount</button>
            <button onClick={()=>console.log('finalinfo')}>Print cheque info</button>
          </div>:
          null
      }

      <section className='chequeheader'>
        <AddCircleIcon onClick={openMenu} />
        <div style={{color:'darkgreen',backgroundColor:'skyblue'}}>Add serach function</div>
        <div>Cheque Info</div>
      </section>
      <ChequeTitle />
    </>
  )
}

export default Cheque
