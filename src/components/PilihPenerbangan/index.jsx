import React, { useEffect } from 'react'
import Navbar from './navbar'
import TextURL from './texturl'
import PenerbanganTujuan from './penerbangantujuan'
import CardPilihPenerbangan from './cardpilihpenerbangan'
// import '../../App.css'

function PilihPenerbangan() {
  
  useEffect(() => {
    document.body.style.backgroundColor = '#fafafa'
  }, [])

  const textPenerbangan = 'Harap pilih penerbangan'

  return (
    <div>
        <Navbar />
        <TextURL />
        <PenerbanganTujuan text = {textPenerbangan}/>
        <CardPilihPenerbangan />
    </div>
  )
}

export default PilihPenerbangan