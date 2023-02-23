import React from 'react'
import { Link } from 'react-router-dom'
import { useChequecontext } from '../Context/ChequeContext'
import logo from '../../public/testicon.jpg'

const Header = () => {
  const { auth, setAuth } = useChequecontext()
  return (
    <div className='header'>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          {(auth.userName)
            ?<>
              <li><Link to='/dash/drag'>Drag</Link></li>
              <li><Link to='/dash/supplier'>Supplier</Link></li>
              <li><Link to='/dash/patient'>Patient</Link></li>
              <li><Link to='/dash/employee'>Employee</Link></li>
              <li><Link to='/dash/cheque'>Cheque</Link></li>
              <li><Link to='/' onClick={() => setAuth('')}>Sign-out</Link></li>
            </>
            :<li><Link to='/login'>Sign-in</Link></li>
          }
          
          {/* not yet produce */}
          {/* <li><Link to='/suppiler'>Suppiler List</Link></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Header
