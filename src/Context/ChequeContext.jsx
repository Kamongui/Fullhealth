import React, { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { getChequeData, getDragData, getSupplierData, chequeEndpt, dragEndpt, supplierEndpt } from '../api/fetchData';

const ChequeContext = createContext()

export function useChequecontext() {
  return useContext(ChequeContext)
}

export function ContextProvider({children}) {
  // line 13 - 40 are for Data control using "SWR"
  // For Chque info
  const {
    isLoading,
    error,
    data: chequeData,
    mutate
  } = useSWR(chequeEndpt, getChequeData, {
    onSuccess: data => data.sort((a,b)=> a.id - b.id)
  });
  // For Drag
  const {
    isLoading: dragLoading,
    error: dragError,
    data: dragData,
    mutate: dragMutate
  } = useSWR(dragEndpt, getDragData, {
    onSuccess: data => data.sort((a,b)=> a.id - b.id)
  });
  // For Supplier
  const {
    isLoading: supplierLoading,
    error: supplierError,
    data: supplierData,
    mutate: supplierMutate
  } = useSWR(supplierEndpt, getSupplierData, {
    onSuccess: data => data.sort((a,b)=> a.id - b.id)
  });
  // Control the price add into check info
  const [totalPrice, setTotalPrice] = useState([]);
  // Selfuse, useless, can del
  const [print, setPrint] = useState(false);
  // For print PDF
  const [printData, setPrintData] = useState([]);
  const [quantity,setQuantity] = useState(0);

  const [auth, setAuth] = useState('')
  // Context list for share to global
  const value = {
    chequeData   , isLoading,
    error        , mutate,
    dragData     , dragLoading,
    dragError    , dragMutate,
    supplierData , supplierLoading,
    supplierError, supplierMutate,
    print        , setPrint,
    totalPrice   , setTotalPrice,
    quantity     , setQuantity,
    printData    , setPrintData,
    auth         , setAuth
  }

  return (
    <ChequeContext.Provider value={value}>
      {children}
    </ChequeContext.Provider>
  )
}