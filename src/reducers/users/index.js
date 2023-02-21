import {
  GET_DETAIL_LIST_USERS,
  GET_LIST_USERS,
  ADD_LIST_USERS,
  EDIT_LIST_USERS,
  DELETE_LIST_USERS,
  LOGIN_USERS,
  WHO_AM_I,
  NOTIFICATION,
} from "../../actions/usersAction";

const initialState = {
  loginUsersResult: false,
  loginUsersLoading: false,
  loginUsersError: false,

  getListUsersResult: false,
  getListUsersLoading: false,
  getListUsersError: false,

  getDetailListUsersResult: false,
  getDetailListUsersLoading: false,
  getDetailListUsersError: false,

  addUsersResult: false,
  addUsersLoading: false,
  addUsersError: false,

  editUsersResult: false,
  editUsersLoading: false,
  editUsersError: false,

  deleteUsersResult: false,
  deleteUsersLoading: false,
  deleteUsersError: false,

  whoAmIResult: false,
  whoAmILoading: false,
  whoAmIError: false,

  notificationResult: false,
  notificationLoading: false,
  notificationError: false,
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case WHO_AM_I:
      return {
        ...state,
        whoAmIResult: action.payload.data,
        whoAmILoading: action.payload.loading,
        whoAmIError: action.payload.errorMessage,
      };

    case NOTIFICATION:
      return {
        ...state,
        notificationResult: action.payload.data,
        notificationLoading: action.payload.loading,
        notificationError: action.payload.errorMessage,
      };

    case GET_LIST_USERS:
      return {
        ...state,
        getListUsersResult: action.payload.data,
        getListUsersLoading: action.payload.loading,
        getListUsersError: action.payload.errorMessage,
      };
    case GET_DETAIL_LIST_USERS:
      return {
        ...state,
        getDetailListUsersResult: action.payload.data,
        getDetailListUsersLoading: action.payload.loading,
        getDetailListUsersError: action.payload.errorMessage,
      };
    case EDIT_LIST_USERS:
      return {
        ...state,
        editUsersResult: action.payload.data,
        editUsersLoading: action.payload.loading,
        editUsersError: action.payload.errorMessage,
      };
    case DELETE_LIST_USERS:
      return {
        ...state,
        deleteUsersResult: action.payload.data,
        deleteUsersLoading: action.payload.loading,
        deleteUsersError: action.payload.errorMessage,
      };
    case ADD_LIST_USERS:
      return {
        ...state,
        addUsersResult: action.payload.data,
        addUsersLoading: action.payload.loading,
        addUsersError: action.payload.errorMessage,
      };
    case LOGIN_USERS:
      return {
        ...state,
        loginUsersResult: action.payload.data,
        loginUsersLoading: action.payload.loading,
        loginUsersError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default UsersReducer;
