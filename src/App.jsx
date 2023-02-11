import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './page/Home'
import DragList from './page/Drag'
import Cheque from './page/cheque/Cheque'
import Supplier from './page/Supplier'
import Register from './page/Register'
import Login from './page/Login'
import PrintPDF from './page/cheque/PrintPDF'

function App() {

  return (
    <>
      <Header/>
      <main className='mainContent'>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Route>
          <Route path='/cheque' element={<Cheque/>} />
          <Route path='/drag' element={<DragList/>} />
          <Route path='/supplier' element={<Supplier/>} />
          <Route path='/print' element={<PrintPDF/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
