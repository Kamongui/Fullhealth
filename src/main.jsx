import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextProvider } from './Context/ChequeContext'
// import '../dist/newStyle.css'
import './style/newStyle.scss'
import { preload } from 'swr'
import { 
  chequeEndpt, getChequeData,
  dragEndpt, getDragData,
  supplierEndpt, getSupplierData
 } from './api/fetchData'

preload(
  chequeEndpt, getChequeData,
  dragEndpt, getDragData,
  supplierEndpt, getSupplierData
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
