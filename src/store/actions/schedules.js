import * as actionTypes from "./actionTypes";
import axios from "../../axios-instance";

export const fetchScheduleStart = () => ({type: actionTypes.FETCH_SCHEDULE_START});

export const fetchScheduleSuccess = (schedules) => {
    return {
        type: actionTypes.FETCH_SCHEDULES_SUCCESS,
        schedules: schedules
    }
};

export const fetchScheduleFail = (error) => {
    return {
        type: actionTypes.FETCH_SCHEDULE_FAIL,
        error: error
    }
};

export const fetchSchedules = (token, userId) => {
    return dispatch => {
        dispatch(fetchScheduleStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/schedules.json' + queryParams)
            .then(res => {
                const fetchedSchedules = [];
                for (let key in res.data) {
                    fetchedSchedules.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchScheduleSuccess(fetchedSchedules));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchScheduleFail(error));
            });
    };
};

export const addScheduleSuccess = (id, schedule) => {
    return {
        type: actionTypes.ADD_SCHEDULE_SUCCESS,
        scheduleId: id,
        schedule: schedule
    }
};

export const addSchedule = (token, schedule) => {
    const daysToApi = schedule.days.map(day=> {
        const meals = day.meals.map(meal=> {
            if (!meal) {
                return 'brak przepisu';
            } else {
                return meal;
            }
        })
        return {name: day.name, meals};
    })
    const scheduleToApi = {...schedule, days: daysToApi};

    return dispatch => {
        dispatch(fetchScheduleStart());
        axios.post('/schedules.json?auth=' + token, scheduleToApi)
            .then(function (res) {
                dispatch(addScheduleSuccess(res.data.name, scheduleToApi));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchScheduleFail(error));
            });
    };
};

export const deleteSchedule = (token, scheduleId, userId) => {
    return dispatch => {
        dispatch(fetchScheduleStart());
        axios.delete('/schedules/' + scheduleId + '.json?auth=' + token)
            .then(function (res) {
                dispatch(fetchSchedules(token, userId));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchScheduleFail(error));
            });
    };
};

export const editSchedule = (token, scheduleId, userId, schedule) => {
    return dispatch => {
        dispatch(fetchScheduleStart());
        axios.patch('/schedules/' + scheduleId + '.json?auth=' + token, schedule)
            .then(function (res) {
                dispatch(fetchSchedules(token, userId));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchScheduleFail(error));
            });
    };
};

export const setScheduleToShow = (schedule) => {
    return {
        type: actionTypes.SET_SCHEDULE_TO_SHOW,
        payload: schedule
    }
};