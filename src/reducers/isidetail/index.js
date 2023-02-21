import { POST_ISIDETAIL, GET_ISIDETAIL } from '../../actions/formAction';

const initialState = {
  postIsiDetailResult: false,
  postIsiDetailLoading: false,
  postIsiDetailError: false,

  getIsiDetailResult: false,
  getIsiDetailLoading: false,
  getIsiDetailError: false,
};

const Airlines = (state = initialState, action) => {
  switch (action.type) {
    case POST_ISIDETAIL:
      return {
        ...state,
        postIsiDetailResult: action.payload.data,
        postIsiDetailLoading: action.payload.loading,
        postIsiDetailError: action.payload.errorMessage,
      };
    case GET_ISIDETAIL:
      return {
        ...state,
        getIsiDetailResult: action.payload.data,
        getIsiDetailLoading: action.payload.loading,
        getIsiDetailError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default Airlines;
