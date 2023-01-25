import React, { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'
import { getChequeData } from '../controller/ChequeController';


const ChequeContext = createContext()

export function useChequecontext() {
  return useContext(ChequeContext)
}

export function ContextProvider({children}) {
  const [date,setDate] = useState('')
  const [to,setTo] = useState('')
  const [amount,setAmount] = useState('')
  const [data, setData] = useState([]);
  const [print, setPrint] = useState('');
  
  useEffect(()=>{
    const getData = async () => {
      try{
        const response = await getChequeData();
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  },[])


  return (
    <ChequeContext.Provider value={{data, setData, date, setDate, to, setTo, amount, setAmount, print, setPrint}}>
      {children}
    </ChequeContext.Provider>
  )
}