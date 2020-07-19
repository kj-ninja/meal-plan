import * as actionTypes from '../actions/actionTypes';
import {getActualWeekNumber, getScheduleByWeekNumber} from "../../functions/showScheduleByWeekNumber";

const initialState = {
    schedules: [],
    loading: false,
    error: null,
    scheduleToShow: null
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
            let newScheduleToShow = null;
            const actualWeekNumber = getActualWeekNumber(new Date());
            const schedule = getScheduleByWeekNumber(actualWeekNumber, action.schedules);

            if (schedule) {
                newScheduleToShow = schedule;
            } else {
                const schedulesByWeekNumber = action.schedules
                    .filter(schedule => +schedule.weekNumber > actualWeekNumber)
                    .sort((a, b) => a - b);
                if (schedulesByWeekNumber.length > 0) {
                    newScheduleToShow = schedulesByWeekNumber[0];
                } else {
                    newScheduleToShow = false;
                }
            }

            let newSchedules = action.schedules.sort((a, b) => {
                return b.weekNumber - a.weekNumber;
            })
            //
            // const plans = newSchedules.map(plan => {
            //     return plan.days.map(day=> {
            //         if (!day.hasOwnProperty('meals')) {
            //             return {
            //                 ...day,
            //                 meals: ['brak przepisu', 'brak przepisu', 'brak przepisu', 'brak przepisu',]
            //             }
            //         }
            //         else {
            //             return day;
            //         }
            //     })
            // })

            return {
                ...state,
                scheduleToShow: newScheduleToShow,
                schedules: newSchedules,
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
        case actionTypes.SET_SCHEDULE_TO_SHOW:
            return {
                ...state,
                scheduleToShow: action.payload
            }
        default:
            return state;
    }
};

export default schedulesReducer;