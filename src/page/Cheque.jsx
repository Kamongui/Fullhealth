import React, { useEffect, useReducer } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChequeTitle from '../Component/chequesym/ChequeTitle'
import { useChequecontext } from '../Context/ChequeContext'
import DragList from '../Component/chequesym/DragList'

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

const Cheque = () => {
  const [state,dispatch] = useReducer(
    reducer,
    {
      count:0,
      edit:false,
      adddrag:false,
      addcheque:false,
    }
  )

  const { dragdata,totalPrice } = useChequecontext()

  return (
    <>
      {(state.adddrag)?
        <div className='chequecomponent'>
          {dragdata.map(data => 
            <div key={data.id}>
              <DragList {...data} />
            </div>
          )}
          <div>
            {totalPrice.reduce((price)=>{
              price=+price
            })}
          </div>
          <button onClick={()=>dispatch({type:ACTION.ADDDRAG})}>Add</button>
          <button onClick={()=>dispatch({type:ACTION.CANCEL})}>Close</button>
        </div>:
        null
      }
      <section className='chequeheader'>
        
        <AddCircleIcon onClick={()=>dispatch({type:ACTION.ADDDRAG})} />
        <div>Cheque Info</div>
        {(!state.stForm)?
          (
            <div>
              <div>"dragList"</div>
              <button onClick={()=>dispatch({type:ACTION.OPSTFORM})}>Next</button>
            </div>
          ):
          (!ndForm)?(
            <div>
              <div>"supplierList"</div>
              {/* <button onClick={()=>setStForm(false)}>Back</button> */}
              <button onClick={()=>setNdForm(true)}>Next</button>
            </div>
          ):
          "Success"
        }
      </section>
      <ChequeTitle />
    </>
  )
}

export default Cheque
