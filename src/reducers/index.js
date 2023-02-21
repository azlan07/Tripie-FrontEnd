import { combineReducers } from 'redux';
import AirlinesReducer from './airlines';
import formReducer from './form'
import Airlines from './isidetail';
import ScheduleReducer from './schedule';
import UsersReducer from './users'

export default combineReducers({
    AirlinesReducer,
    formReducer,
    Airlines,
    ScheduleReducer,
    UsersReducer
});
