import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './page/Home'
import Register from './page/Register'
import Login from './page/Login'
import Dashboard from './page/dash/Dashboard'
import Welcome from './page/dash/Welcome'
import DragList from './page/dash/Drag'
import Supplier from './page/dash/Supplier'
import Patient from './page/dash/Patient'
import Employee from './page/dash/Employee'
import Cheque from './page/dash/cheque/Cheque'
import ChooseDrag from './page/dash/cheque/ChooseDrag'
import ChooseSalary from './page/dash/cheque/ChooseSalary'
import ChooseOthers from './page/dash/cheque/ChooseOthers'
import PrintPDF from './page/dash/cheque/PrintPDF'
import { useChequecontext } from './Context/ChequeContext'

function App() {
  const { auth } = useChequecontext();

  return (
    <>
      <Header/>
      <main className='mainContent'>
        <Routes>
          <Route path='/' element={<Home/>}>
            {(auth.userName)
              ?<Route index element={<Welcome />} />
              :<Route index element={<Register />} />}
            <Route path='login' element={<Login />} />
          
            {/* Protect Route */}
            <Route path='dash' element={<Dashboard />}>
              <Route index element={<Welcome />}/>
              <Route path='cheque' element={<Cheque/>}>
                <Route index element={<ChooseDrag />} />
                <Route path='choosesalary' element={<ChooseSalary/>} />
                <Route path='chooseothers' element={<ChooseOthers/>} />
              </Route>
              <Route path='drag' element={<DragList/>} />
              <Route path='supplier' element={<Supplier/>} />
              <Route path='patient' element={<Patient/>} />
              <Route path='employee' element={<Employee/>} />
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
