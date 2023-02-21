import axios from "axios";

export const GET_LIST_AIRLINES = "GET_LIST_AIRLINES";
export const GET_DETAIL_LIST_AIRLINES = "GET_DETAIL_LIST_AIRLINES";
export const ADD_LIST_AIRLINES = "ADD_LIST_AIRLINES";
export const DELETE_LIST_AIRLINES = "DELETE_LIST_AIRLINES";
export const EDIT_LIST_AIRLINES = "EDIT_LIST_AIRLINES";

const token = localStorage.getItem('token')

export const getListAirlines = () => (dispatch) => {
  dispatch({
    type: GET_LIST_AIRLINES,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "GET",
    // url: "http://localhost:8000/get-airport",
    url: "https://be-final-production.up.railway.app/get-airport",
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      dispatch({
        type: GET_LIST_AIRLINES,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_LIST_AIRLINES,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const addListAirlines = (data) => (dispatch) => {
  dispatch({
    type: ADD_LIST_AIRLINES,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "POST",
    // url: "http://localhost:8000/add-schedule",
    url: "https://be-final-production.up.railway.app/add-schedule",
    data: data,
    timeout: 120000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `${token}`
    }
  })
    .then((response) => {
      dispatch({
        type: ADD_LIST_AIRLINES,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_LIST_AIRLINES,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
