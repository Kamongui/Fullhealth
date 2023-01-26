import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './page/Home'
import Cheque from './page/cheque/Cheque'
import DragList from './page/drag/DragList'
import Cheque from './page/Cheque'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cheque' element={<Cheque/>} />
        <Route path='/drag' element={<DragList/>} />
        <Route path='/cheque' element={<Cheque/>} />
      </Routes>
    </>
  )
}

export default App
