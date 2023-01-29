import React, { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'
import { getChequeData, getDragData, getSupplierData } from '../controller/DataController';


const ChequeContext = createContext()

export function useChequecontext() {
  return useContext(ChequeContext)
}

export function ContextProvider({children}) {
  const [date,setDate] = useState([])
  const [dragdata, setDragdata] = useState([])
  const [supplierdata, setSupplierdata] = useState([])
  const [totalPrice, setTotalPrice] = useState([0])
  const [to,setTo] = useState('')
  const [amount,setAmount] = useState('')
  const [data, setData] = useState([]);
  const [print, setPrint] = useState('');
  
  useEffect(()=>{
    const getData = async () => {
      try{
        const chequeres = await getChequeData();
        const dragres = await getDragData();
        const supplierres = await getSupplierData();
        setData(chequeres.data);
        setDragdata(dragres.data);
        setSupplierdata(supplierres.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  },[])

  const value = {
    data        , setData,
    dragdata    , setDragdata,
    supplierdata, setSupplierdata,
    date        , setDate,
    to          , setTo,
    amount      , setAmount,
    print       , setPrint,
    totalPrice, setTotalPrice
  }

  return (
    <ChequeContext.Provider value={value}>
      {children}
    </ChequeContext.Provider>
  )
}