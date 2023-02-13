import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChequeTitle from '../../Component/chequesym/ChequeTitle'
import { useChequecontext } from '../../Context/ChequeContext'

import AddCheque from '../../Component/chequesym/addnewcheque/AddCheque'
import { Outlet, Link } from 'react-router-dom';

const Cheque = () => {
  const [searchBy, setSearchBy] = useState('')
  const [search, setSearch] = useState('')
  const [adddrag, setAdddrag] = useState(false)
  const [addcheque,setAddcheque] = useState(false)
  const { isLoading, error, totalPrice, setTotalPrice } = useChequecontext()
  
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
      <section>
        {(adddrag && !addcheque)?
        <div className='chequecomponent'>
          <div>Product List</div>
          <div className='subheader'>
            <Link to='/cheque'>Drag</Link>
            <Link to='/cheque/choosesalary'>Salary</Link>
            <Link to='/cheque/chooseothers'>Others</Link>
          </div>
          <Outlet />
          <div>
            {finalprice}
          </div>
          <button onClick={addbtn}>Add</button>
          <div>
            <button onClick={()=>setTotalPrice([])}>Clear</button>
            <button onClick={closeMenu}>Close</button>
          </div>
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
      </section>

      <section className='chequeheader'>
        <AddCircleIcon onClick={openMenu} />
        <div style={{color:'darkgreen',backgroundColor:'skyblue'}}>
          <input type="textbox" placeholder='Choose Seacrh Item' value={searchBy} onChange={(e)=>setSearchBy(e.target.value)} />
          <input type="textbox" placeholder='Default search by Payee' value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>
        <div>Cheque Info</div>
      </section>
      {(isLoading)?
        <div>Loading...</div>:
        (error)?
          <div>{error.message}</div>:
          <ChequeTitle search={search} searchBy={searchBy}/>
      }
    </>
  )
}

export default Cheque
