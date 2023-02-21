import React from 'react';

function Maskapai() {
  return (
    <>
      <div className="container mt-5 maskapai">
            <div className="row">
                <div className="col-6">
                    <h3 className="fs-4 mb-3">Maskapai</h3>
                </div>
                <div className="col-6">
                    <a href="#" className='btn btn-primary' id='kanan'>Tambah Maskapai</a>
                </div>
            </div>
            <div className="row my-2">
                <div className="col">
                    <table className="table bg-white rounded shadow-sm  table-hover">
                        <thead>
                            <tr>
                                <th scope="col" width="50">No</th>
                                <th scope="col">Pesawat</th>
                                <th scope="col">Kode</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Boeing 777</td>
                                <td>qz876</td>
                                <td>
                                    <button className="btn btn-primary me-2">Edit</button>
                                    <button className="btn btn-danger">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  );
}

export default Maskapai;
