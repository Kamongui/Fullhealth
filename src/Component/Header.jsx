import React from 'react'
import { Link } from 'react-router-dom'
import { useChequecontext } from '../Context/ChequeContext'

const Header = () => {
  const { auth, setAuth } = useChequecontext()
  return (
    <div className='header'>
      <div>For Logo</div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/dash/drag'>Drag List</Link></li>
          <li><Link to='/dash/supplier'>Supplier List</Link></li>
          <li><Link to='/dash/cheque'>Cheque</Link></li>
          {(auth.userName)
            ?<li><Link to='/' onClick={() => setAuth('')}>Sign-out</Link></li>
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
