import React, { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'
import { getChequeData, getDragData, getSupplierData } from '../controller/DataController';


const ChequeContext = createContext()

export function useChequecontext() {
  return useContext(ChequeContext)
}

export function ContextProvider({children}) {
  const [data, setData] = useState([]);
  const [dragdata, setDragdata] = useState([])
  const [supplierdata, setSupplierdata] = useState([])
  const [totalPrice, setTotalPrice] = useState([])
  const [print, setPrint] = useState('');
  const [quantity,setQuantity] = useState(0)
  
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

  const value = {
    data        , setData,
    dragdata    , setDragdata,
    supplierdata, setSupplierdata,
    print       , setPrint,
    totalPrice  , setTotalPrice,
    quantity    , setQuantity,
    inDrag      , deDrag,
    rmDrag      , getItem
  }

  return (
    <ChequeContext.Provider value={value}>
      {children}
    </ChequeContext.Provider>
  )
}