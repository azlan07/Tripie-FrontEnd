import axios from "axios";

export const POST_ISIDETAIL = 'POST_ISIDETAIL';
export const GET_ISIDETAIL = 'GET_ISIDETAIL'

export const postIsiDetail = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
    dispatch({
        type: POST_ISIDETAIL,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });

      // POST API
  axios({
    method: 'POST',
    // url: 'https://be-final-production.up.railway.app/booking-ticket',
    url: 'http://localhost:8000/booking-ticket',
    timeout: 120000,
    data: data,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      dispatch({
        type: POST_ISIDETAIL,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: POST_ISIDETAIL,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
}

export const getIsiDetail = () => (dispatch) => {
    dispatch({
        type: GET_ISIDETAIL,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });

  axios({
    method: 'GET',
    url: 'http://localhost:8000/history',
    // url: 'https://be-final-production.up.railway.app/history',
    timeout: 120000,
  })
    .then((response) => {
      dispatch({
        type: GET_ISIDETAIL,
        payload: {
          loading: false,
          data: response.data.data.Booking,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ISIDETAIL,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
}
