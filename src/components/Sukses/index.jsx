import React from 'react'
import sukses from '../../assets/images/success.png'
import { Link } from 'react-router-dom'

function Sukses() {
  return (
    <div>
      <div className="text-center mt-5">
        <img src={sukses} alt={sukses} className='img-fluid' />
        <div className="text-sukses mt-3">
          <h1>Yay Success</h1>
          <p>I hope enjoy with our flight</p>
        </div>
        <Link to ='/'>
          <button className='btn btn-lg btn-primary mt-3'>Return to Home</button>
        </Link>
        <div>
          <Link to ='/pesanan-saya'>
          <button className='btn btn-lg btn-primary mt-3'>Check my booking</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sukses