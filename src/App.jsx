import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './page/Home'
import DragList from './page/Drag'
import Cheque from './page/Cheque'
import Supplier from './page/Supplier'
import Register from './page/Register'
import Login from './page/Login'

function App() {

  return (
    <>
      <Header/>
      <main className='mainContent'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cheque' element={<Cheque/>} />
          <Route path='/drag' element={<DragList/>} />
          <Route path='/supplier' element={<Supplier/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </>
  )
}

export default App
