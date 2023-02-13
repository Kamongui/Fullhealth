import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './page/Home'
import DragList from './page/Drag'
import Cheque from './page/cheque/Cheque'
import Supplier from './page/Supplier'
import Register from './page/Register'
import Login from './page/Login'
import PrintPDF from './page/cheque/PrintPDF'
import ChooseDrag from './page/cheque/ChooseDrag'
import ChooseSalary from './page/cheque/ChooseSalary'
import ChooseOthers from './page/cheque/ChooseOthers'

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
          <Route path='/cheque' element={<Cheque/>}>
            <Route path='/cheque' element={<ChooseDrag />} />
            <Route path='/cheque/choosesalary' element={<ChooseSalary/>} />
            <Route path='/cheque/chooseothers' element={<ChooseOthers/>} />
          </Route>
          <Route path='/drag' element={<DragList/>} />
          <Route path='/supplier' element={<Supplier/>} />
          <Route path='/print' element={<PrintPDF/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
