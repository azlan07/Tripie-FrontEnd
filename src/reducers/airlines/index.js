import { GET_LIST_AIRLINES, GET_DETAIL_LIST_AIRLINES, ADD_LIST_AIRLINES, EDIT_LIST_AIRLINES, DELETE_LIST_AIRLINES } from '../../actions/airlinesAction';

const initialState = {
  getListAirlinesResult: false,
  getListAirlinesLoading: false,
  getListAirlinesError: false,

  addAirlinesResult: false,
  addAirlinesLoading: false,
  addAirlinesError: false,
};

const Airlines = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_AIRLINES:
      return {
        ...state,
        getListAirlinesResult: action.payload.data,
        getListAirlinesLoading: action.payload.loading,
        getListAirlinesError: action.payload.errorMessage,
      };
    case ADD_LIST_AIRLINES:
      return {
        ...state,
        addAirlinesResult: action.payload.data,
        addAirlinesLoading: action.payload.loading,
        addAirlinesError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default Airlines;
