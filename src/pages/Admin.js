import React from 'react';

function Admin() {
  return (

    <>
      <div className='home mt-3'>
        {/* <!-- Page Content --> */}
        <div className="container">
          <div className="row g-3">
            <div className="col-md-3">
              <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded shadow-lg" id="card">
                <div>
                  <p className="fs-5">Maskapai</p>
                  <h3 className="fs-2">12</h3>
                </div>
                <i className="fa-sharp fa-solid fa-plane fs-1 border rounded-full bg-white p-3"></i>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded shadow-lg" id="card">
                <div>
                  <p className="fs-5">Pesanan</p>
                  <h3 className="fs-2">12</h3>
                </div>
                <i className="fa-sharp fa-solid fa-cart-shopping fs-1 primary-text border rounded-full bg-white p-3"></i>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded shadow-lg" id="card">
                <div>
                  <p className="fs-5">Pengguna</p>
                  <h3 className="fs-2">9</h3>
                </div>
                <i className="fa-sharp fa-solid fa-user fs-1 primary-text border rounded-full bg-white p-3"></i>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded shadow-lg" id="card">
                <div>
                  <p className="fs-5">Admin</p>
                  <h3 className="fs-2">1</h3>
                </div>
                <i className="fa-sharp fa-solid fa-user-secret fs-1 primary-text border rounded-full bg-white p-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
