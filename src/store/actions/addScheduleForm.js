import * as actionTypes from './actionTypes';

export const mapScheduleToEdit = (schedule) => ({type: actionTypes.MAP_SCHEDULE_TO_EDIT, schedule: schedule});
export const clearAddScheduleForm = () => ({type: actionTypes.CLEAR_ADD_SCHEDULE_FORM});