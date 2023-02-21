import React, { useEffect } from 'react'
import NavBar from './navbar'
import TextURL1 from './texturl'
import FormDetail from './formdetail'
import PenerbanganTujuan from './penerbangantujuan'
// import '../../App.css'

function IsiDetail() {
  useEffect(() => {
    document.body.style.backgroundColor = '#fafafa'
  }, [])

  const textIsiDetail = 'Harap isi informasi kontak'

  return (
    <div>
        <NavBar />
        <TextURL1 />
        <PenerbanganTujuan text={textIsiDetail} />
        <FormDetail />
    </div>
  )
}

export default IsiDetail