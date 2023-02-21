import { GET_LIST_SCHEDULE, GET_DETAIL_LIST_SCHEDULE, ADD_LIST_SCHEDULE, EDIT_LIST_SCHEDULE, DELETE_LIST_SCHEDULE } from "../../actions/scheduleAction";

const initialState = {
  getListScheduleResult: false,
  getListScheduleLoading: false,
  getListScheduleError: false,

  getDetailListScheduleResult: false,
  getDetailListScheduleLoading: false,
  getDetailListScheduleError: false,

  addScheduleResult: false,
  addScheduleLoading: false,
  addScheduleError: false,

  editScheduleResult: false,
  editScheduleLoading: false,
  editScheduleError: false,

  deleteScheduleResult: false,
  deleteScheduleLoading: false,
  deleteScheduleError: false,
};

const ScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_SCHEDULE:
      return {
        ...state,
        getListScheduleResult: action.payload.data,
        getListScheduleLoading: action.payload.loading,
        getListScheduleError: action.payload.errorMessage,
      };
    case GET_DETAIL_LIST_SCHEDULE:
      return {
        ...state,
        getDetailListScheduleResult: action.payload.data,
        getDetailListScheduleLoading: action.payload.loading,
        getDetailListScheduleError: action.payload.errorMessage,
      };
    case EDIT_LIST_SCHEDULE:
      return {
        ...state,
        editScheduleResult: action.payload.data,
        editScheduleLoading: action.payload.loading,
        editScheduleError: action.payload.errorMessage,
      };
    case DELETE_LIST_SCHEDULE:
      return {
        ...state,
        deleteScheduleResult: action.payload.data,
        deleteScheduleLoading: action.payload.loading,
        deleteScheduleError: action.payload.errorMessage,
      };
    case ADD_LIST_SCHEDULE:
      return {
        ...state,
        addScheduleResult: action.payload.data,
        addScheduleLoading: action.payload.loading,
        addScheduleError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default ScheduleReducer;