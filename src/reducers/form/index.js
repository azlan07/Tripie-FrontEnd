const initialState = {
    formData: {},
    formDetail:{
    }
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_FORM':
        return {
          ...state,
          formData: action.payload,
        };
      case 'STORE_FORM_DETAIL':
        return {
          ...state,
          formDetail: action.payload,
        };
      default:
        return state;
    }
  };
  
export default formReducer;