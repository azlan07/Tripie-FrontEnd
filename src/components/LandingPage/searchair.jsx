import React, { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import listClass from "../../list-class";
import { NavLink, useNavigate, replace } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getListAirlines } from "../../actions/airlinesAction";

function SearchAir() {

  const { getListAirlinesResult, getListAirlinesLoading, getListAirlinesError } = useSelector((state) => state.AirlinesReducer);
  // const { getFormsResult } = useSelector((state) => state.FormsReducer);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
      // console.log("use effect component did mount (airlines)");

      dispatch(getListAirlines())

  }, [dispatch])


  const [ isOnce, setIsOnce ] = useState(false);
  const [ formData, setFormData ] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name] : value})
  
    // console.log(formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch an action with the form data as payload
    dispatch({
      type: 'SUBMIT_FORM',
      payload: formData,
    });

    dispatch({
      type: 'STORE_FORM_DETAIL',
      payload: formData,
    });

    navigate('/pilih-penerbangan', { replace: true });
    
    console.log(formData)
  }

  function handleClickOnce(e) {
    setIsOnce(true)
  }

  function handleClickNotOnce(e) {
    setIsOnce(false)
  }

  return (
    <div className="search-air">
      <div className="d-flex justify-content-center">
        <Row className="form">
            <Col md={'auto'} className="text-center">
              <h4>Book</h4>
            </Col>
            <Form onSubmit={handleSubmit}>
              <Row className="">
                <Col md={{ span: 4, offset: 9 }}>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Sekali Jalan"
                        name="tipe"
                        type={type}
                        value='One Way Trip'
                        id={`inline-${type}-1`}
                        onClick={(e) => handleClickOnce(e)}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Pulang Pergi"
                        name="tipe"
                        type={type}
                        value='Round Trip'
                        id={`inline-${type}-2`}
                        onClick={(e) => handleClickNotOnce(e)}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </Col>
              </Row>
              <Row className="g-4">
                <Col md ={3}>
                  <Form.Select required name="originAirport"
                  onChange={handleChange}
                  >
                  <option hidden>Dari</option>
                  {getListAirlinesResult &&
                      getListAirlinesResult.map((airline) => {
                        return (
                          <option key={airline.id} value={airline.Airport_Name}>
                            {airline.Airport_Name}
                          </option>
                        )
                      })
                  }
                  </Form.Select>
                </Col>
                <Col md ={3}>
                  <Form.Select required name="destinationAirport"
                  onChange={handleChange}
                  // value={formData.destinationAirport}
                  >
                    <option hidden>Ke</option>
                    {getListAirlinesResult &&
                      getListAirlinesResult.map((airline) => {
                        return (
                          <option key={airline.id} value={airline.Airport_Name}>
                            {airline.Airport_Name}
                          </option>
                        )
                      })
                  }
                  </Form.Select>
                </Col>
                <Col md ={`${isOnce ? 6 : 3 }`}>
                  <Form.Control
                    name="date_pergi"
                    type="text"
                    placeholder="Pergi"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => (e.target.type = 'text')}
                    onChange={handleChange}
                    // value={formData.date_pergi}
                    >
                    
                  </Form.Control>
                </Col>
                <Col md ={`${isOnce ? "" : 3 }`}>
                  <Form.Control
                    name="date_pulang"
                    className={`${!isOnce ? "" : "d-none"}`}
                    type="text"
                    placeholder="Pulang"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => (e.target.type = 'text')}
                    onChange={handleChange}
                    // value={formData.date_pulang}
                    >
                  </Form.Control>
                </Col>
              </Row>
              <Row className="g-3 mt-1">
                <Col md={3}>
                  <Form.Control
                    name="tiket"
                    type="number"
                    placeholder="Tiket"
                    onChange={handleChange}
                    // value={formData.tiket}
                    required
                    >
                  </Form.Control>
                </Col>
                <Col md={3}>
                  <Form.Select required name="tipe_class"
                  onChange={handleChange}
                  // value={formData.tipe_class}
                  >
                    <option hidden>Tipe Kelas</option>
                    {listClass.map((list) => (
                      <option key={list.id} value={list.class}>
                        {list.class}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
                <Col md={6}>
                  {/* <NavLink to ='/pilih-penerbangan'> */}
                    <button type="submit" className="btn-cari">Cari Penerbangan</button>
                  {/* </NavLink> */}
                </Col>
              </Row>
            </Form>
        </Row>
      </div>
    </div>
  );
}

export default SearchAir;
