import React, { useReducer } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChequeTitle from '../Component/chequesym/ChequeTitle'
import { useChequecontext } from '../Context/ChequeContext'
import DragList from '../Component/chequesym/DragList'
import AddCheque from '../Component/chequesym/addnewcheque/AddCheque'

const ACTION = {ADDDRAG:'adddarg', ADDCHEQUE:'addcheque',BACKTODRAG:'backtodrag',CANCEL:'cancel'}

const reducer = (state,action) => {
  //op = open, cl = close
  switch (action.type){
    case 'adddarg':
      return {...state,adddrag:true}
    case 'addcheque':
      return {...state,addcheque:true}
    case 'backtodrag':
      return {...state,addcheque:false}
    case 'cancel':
      return {...state,adddrag:false,addcheque:false}
    default:
      return {...state}
  }
}
const initialState = {count:0,edit:false,adddrag:false,addcheque:false}

const Cheque = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const { dragdata, totalPrice, setTotalPrice } = useChequecontext()

  console.log(state.adddrag,state.addcheque)
  return (
    <>
      {/* Choose product(s) to pay supplier */}
      {(state.adddrag && !state.addcheque)?
        <div className='chequecomponent'>
          {dragdata.map((data,test) => 
            <div key={data.id}>
              <DragList {...data} />
            </div>
          )}
          <div>
            {totalPrice.reduce((total, item)=>{
              return total + (item.price*item.quantity)
            },0)
            }
          </div>
          <button onClick={()=>dispatch({type:ACTION.ADDCHEQUE})}>Add</button>
          <br />
          <button onClick={()=>setTotalPrice([])}>Clear</button>
          <button onClick={()=>dispatch({type:ACTION.CANCEL})}>Close</button>
        </div>:(state.adddrag && state.addcheque)?
          <div className='chequecomponent'>
            <AddCheque />
            <button onClick={()=>dispatch({type:ACTION.BACKTODRAG})}>Back</button>
            <button onClick={()=>dispatch({type:ACTION.CANCEL})}>Close</button>
          </div>:
          null
      }

      <section className='chequeheader'>
        <AddCircleIcon onClick={()=>dispatch({type:ACTION.ADDDRAG})} />
        <div>Cheque Info</div>
      </section>
      <ChequeTitle />
    </>
  )
}

export default Cheque
