import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../slice/chequeSlice'

const Home = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      Home
      <div>
        <div>Testing Counter</div>
        <div>{count}</div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <section className='container'>
        <Outlet />
      </section>
    </div>
  )
}

export default Home
