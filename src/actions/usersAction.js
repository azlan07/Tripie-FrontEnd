import axios from "axios";
import swal from "sweetalert";
export const GET_LIST_USERS = "GET_LIST_USERS";
export const GET_DETAIL_LIST_USERS = "GET_DETAIL_LIST_USERS";
export const ADD_LIST_USERS = "ADD_LIST_USERS";
export const DELETE_LIST_USERS = "DELETE_LIST_USERS";
export const EDIT_LIST_USERS = "EDIT_LIST_USERS";
export const LOGIN_USERS = "LOGIN_USERS";
export const WHO_AM_I = "WHO_AM_I";
export const NOTIFICATION = "NOTIFICATION";

export const whoAmI = () => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({
    type: WHO_AM_I,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "get",
    url: "https://be-final-production.up.railway.app/api/v1/whoami",
    // url: "http://localhost:8000/api/v1/whoami",
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      dispatch({
        type: WHO_AM_I,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: WHO_AM_I,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const loginUsers = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({
    type: LOGIN_USERS,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "post",
    // url: "http://localhost:8000/login",
    url: "https://be-final-production.up.railway.app/login",
    data: data,
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      dispatch({
        type: LOGIN_USERS,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const getListUsers = () => (dispatch) => {
  dispatch({
    type: GET_LIST_USERS,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    // url: "http://localhost:8000/get-airport",
    url: "https://be-final-production.up.railway.app/get-airport",
    timeout: 120000,
  })
    .then((response) => {
      dispatch({
        type: GET_LIST_USERS,
        payload: {
          loading: false,
          data: response.data.data.airport,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_LIST_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const addListUsers = (data) => (dispatch) => {
  dispatch({
    type: ADD_LIST_USERS,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "POST",
    // url: "http://localhost:8000/register",
    url: "https://be-final-production.up.railway.app/register",
    data: data,
    timeout: 120000,
  })
    .then((response) => {
      dispatch({
        type: ADD_LIST_USERS,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
      swal("Yeayyy", "Akun berhasil dibuat", "success");
    })
    .catch((error) => {
      dispatch({
        type: ADD_LIST_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
      swal("Error", "Email sudah terdaftar", "error");
    });
};

export const getDetailListUsers = (id) => (dispatch) => {
  dispatch({
    type: GET_DETAIL_LIST_USERS,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    // url: `http://localhost:8000/user/${id}`,
    url: `https://be-final-production.up.railway.app/user/${id}`,
    timeout: 120000,
  })
    .then((response) => {
      dispatch({
        type: GET_DETAIL_LIST_USERS,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DETAIL_LIST_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const editListUsers = (id, formData) => (dispatch) => {
  console.log("formdata ", formData);
  dispatch({
    type: DELETE_LIST_USERS,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "put",
    // url: `http://localhost:8000/user/${id}/update`,
    url: `https://be-final-production.up.railway.app/user/${id}/update`,
    data: formData,
    timeout: 120000,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((response) => {
      dispatch({
        type: EDIT_LIST_USERS,
        payload: {
          loading: false,
          data: response.data.data[0],
          errorMessage: false,
        },
      });
      window.location = "/profile";
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({
        type: EDIT_LIST_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const notification = (id) => (dispatch) => {
  console.log('notif id: ', id)
  dispatch({
    type: NOTIFICATION,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    url: `https://be-final-production.up.railway.app/notification/${id}`,
    timeout: 120000,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      // console.log("response",response.data.data[0]);
      dispatch({
        type: NOTIFICATION,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      // console.log(error);
      dispatch({
        type: NOTIFICATION,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
