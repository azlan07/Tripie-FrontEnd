import React, { useEffect } from "react";
import { AiFillWarning } from 'react-icons/ai'

function Unauthorized() {
  return (
    <div>
      <div className="container text-center mt-5 pt-5">
        <AiFillWarning style={{ fontSize: '150px' }}/>
        <p>You are not authorized to access this page.</p>
      </div>
    </div>
  );
}

export default Unauthorized;
