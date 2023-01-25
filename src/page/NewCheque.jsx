import React, { useEffect, useReducer } from 'react'
import { getChequeData } from '../controller/ChequeController'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import Cheque from './cheque/Cheque';
import ChequeTitle from './cheque/ChequeTitle'

const ACTION = {OPSTFORM:'opstform', OPCHEQUEPART:'opchequePart',CLCHEQUEPART:'clchequePart'}

const reducer = (state,action) => {
  switch (action.type){
    case 'opstform':
      return {...state,stForm:true}
    case 'opchequePart':
      return {...state,chequePart:true}
    case 'clchequePart':
      return {...state,chequePart:false}
    default:
      return {...state}
  }

}

const NewCheque = () => {
  const [state,dispatch] = useReducer(
    reducer,
    {
      count:0,
      edit:false,
      stForm:false,
      ndForm:false,
      chequePart:false
    })
  

  // const [stForm, setStForm] = useState(false);
  const [ndForm, setNdForm] = useState(false);
  


  //get data when re-render the page
  useEffect(()=>{
    const getData = async () => {
      try{
        const response = await getChequeData();
        // setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  },[])
  
  return (
    <>
      <section className='chequeheader'>
        {(state.chequePart)?
          <>
            <div className='chequecomponent'>
              <Cheque />
              <button onClick={()=>dispatch({type:ACTION.CLCHEQUEPART})}>Done</button>
            </div>
          </>:
          null
        }
        <AddCircleIcon onClick={()=>dispatch({type:ACTION.OPCHEQUEPART})} />
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

export default NewCheque
