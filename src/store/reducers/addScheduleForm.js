import * as actionTypes from '../actions/actionTypes';

const initialState = {
    schedule: {
        name: '',
        description: '',
        weekNumber: '',
        monday: []
        // tuesday: [],
        // wednesday: [],
        // thursday: [],
        // friday: [],
        // saturday: [],
        // sunday: [],
    },
    isScheduleEdit: false
}

const addScheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MAP_SCHEDULE_TO_EDIT:
            return {
                ...state,
                schedule: action.schedule,
                isScheduleEdit: true
            }
        case actionTypes.CLEAR_ADD_SCHEDULE_FORM:
            return {
                ...state,
                schedule: initialState.schedule,
                isScheduleEdit: false
            }
        default:
            return state;
    }
};

export default addScheduleReducer;