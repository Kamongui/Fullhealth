import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './page/Home'
import DragList from './page/dash/Drag'
import Cheque from './page/dash/cheque/Cheque'
import Supplier from './page/dash/Supplier'
import Register from './page/Register'
import Login from './page/Login'
import PrintPDF from './page/dash/cheque/PrintPDF'
import ChooseDrag from './page/dash/cheque/ChooseDrag'
import ChooseSalary from './page/dash/cheque/ChooseSalary'
import ChooseOthers from './page/dash/cheque/ChooseOthers'
import Dashboard from './page/dash/Dashboard'
import Welcome from './page/dash/Welcome'

function App() {

  return (
    <>
      <Header/>
      <main className='mainContent'>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route index element={<Register />} />
            <Route path='login' element={<Login />} />
          
            <Route path='dash' element={<Dashboard />}>
              <Route index element={<Welcome />}/>
              <Route path='cheque' element={<Cheque/>}>
                <Route index element={<ChooseDrag />} />
                <Route path='choosesalary' element={<ChooseSalary/>} />
                <Route path='chooseothers' element={<ChooseOthers/>} />
              </Route>
              <Route path='drag' element={<DragList/>} />
              <Route path='supplier' element={<Supplier/>} />
              <Route path='print' element={<PrintPDF/>} />
            </Route>
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
