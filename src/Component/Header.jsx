import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div>For Logo</div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/dash/drag'>Drag List</Link></li>
          <li><Link to='/dash/supplier'>Supplier List</Link></li>
          <li><Link to='/dash/cheque'>Cheque</Link></li>
          <li><Link to='/'>Sign-up</Link></li>
          {/* not yet produce */}
          {/* <li><Link to='/suppiler'>Suppiler List</Link></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Header
