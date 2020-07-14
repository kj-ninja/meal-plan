import * as actionTypes from '../actions/actionTypes';

const initialState = {
    schedules: [],
    loading: false,
    error: null
}

const schedulesReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_SCHEDULE_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.FETCH_SCHEDULES_SUCCESS:
            return {
                ...state,
                schedules: action.schedules,
                loading: false,
                error: null
            }
        case actionTypes.FETCH_SCHEDULE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.ADD_SCHEDULE_SUCCESS:
            const newSchedule = {
                ...action.schedule,
                scheduleId: action.scheduleId
            }
            return {
                ...state,
                loading: false,
                schedules: state.schedules.concat(newSchedule),
                error: null
            };
        default:
            return state;
    }
};

export default schedulesReducer;