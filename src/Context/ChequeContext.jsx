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

  // line 49 - 93, For ChooseDrag fn
  const getItem = (id) => {
    return totalPrice.find(item=>item.id === id)?.quantity || 0
  }
  const inDrag = (id,Price) => {
    setTotalPrice(current=>{
      if(current.find(item=>item.id === id) == null) {
        return [...current,
        {id:id,price:Price,quantity:+1}]
      } else {
        return current.map(item=>{
          if(item.id===id){
            return {...item,quantity:item.quantity+1}
          } else {
            return item
          }
        })
      }
    })
  }
  const deDrag = (id) => {
    setTotalPrice(current=>{
      if(current.find(item=>item.id === id)?.quantity === 1){
        return current.filter(item=>
          item.id !== id
        )} else {
        return current.map(item=>{
          if(item.id===id){
            return {...item,quantity:item.quantity-1}
          } else {
            return item
          }
        })
      }
    })
  }
  const rmDrag = (id) => {
    setTotalPrice(current=>{
      if(current.find(item=>item.id === id)?.quantity){
        return current.filter(item=>
          item.id !== id
        )
      }
    })
  }

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
    inDrag       , deDrag,
    rmDrag       , getItem,
    printData    , setPrintData
  }

  return (
    <ChequeContext.Provider value={value}>
      {children}
    </ChequeContext.Provider>
  )
}