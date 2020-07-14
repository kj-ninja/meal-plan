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
                const fetchedRecipes = [];
                for (let key in res.data) {
                    fetchedRecipes.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchScheduleSuccess(fetchedRecipes));
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
    return dispatch => {
        dispatch(fetchScheduleStart());
        axios.post('/schedules.json?auth=' + token, schedule)
            .then(function (res) {
                dispatch(addScheduleSuccess(res.data.name, schedule));
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

export const editRecipe = (token, scheduleId, userId, schedule) => {
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