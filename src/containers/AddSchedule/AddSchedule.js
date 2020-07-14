import React from 'react';
import {connect} from 'react-redux';
import {addSchedule, editSchedule} from '../../store/actions/schedules';
import {useForm} from "react-hook-form";
import useWindowWidth from "../../functions/customHooks/useWindowWidth";
import './AddSchedule.scss';
import MobileView from "./MobileView/MobileView";
import DesktopView from "./DesktopView/DesktopView";

const AddSchedule = (props) => {
    const {register, handleSubmit, errors, control, getValues} = useForm();
    const {addSchedule, editSchedule} = props;
    const width = useWindowWidth();

    const handleAddSchedule = () => {
        if (props.isScheduleEdit) {
            const schedule = {
                name: getValues('scheduleName'),
                description: getValues('scheduleDescription'),
                weekNumber: getValues('scheduleWeekNumber'),
                monday: props.monday,
                userId: props.userId
            }
            editSchedule(props.token, props.scheduleId, props.userId, schedule);
            props.history.push('/dashboard/schedules');
        } else {
            const schedule = {
                name: getValues('scheduleName'),
                description: getValues('scheduleDescription'),
                weekNumber: getValues('scheduleWeekNumber'),
                monday: [getValues('monday[0]'), getValues('monday[1]'), getValues('monday[2]'), getValues('monday[3]')],
                userId: props.userId
            }
            addSchedule(props.token, schedule);
            props.history.push('/dashboard/schedules');
        }
    };

    return (
        <div className="add-schedule">
            <form onSubmit={handleSubmit(handleAddSchedule)} className="add-schedule__form">
                <div className="add-schedule__header">
                    <h3>Nowy plan</h3>
                    <button type="submit">Zapisz i zamknij</button>
                </div>
                <div className="add-schedule__input-container">
                    <label htmlFor="scheduleName">Nazwa planu</label>
                    <input name="scheduleName"
                           ref={register({required: true})}
                           id="scheduleName"
                           defaultValue={props.name}
                    />
                    {errors.recipeName ? <p className="error-message">{errors.recipeName.message}</p> : null}
                </div>

                <div className="add-schedule__input-container">
                    <label htmlFor="scheduleDescription">Opis planu</label>
                    <textarea name="scheduleDescription"
                              ref={register}
                              id="scheduleDescription"
                              rows={3}
                              defaultValue={props.description}
                    />
                    {errors.recipeDescription ?
                        <p className="error-message">{errors.recipeDescription.message}</p> : null}
                </div>

                <div className="add-schedule__input-container">
                    <label htmlFor="scheduleWeekNumber">Numer tygodnia</label>
                    <input name="scheduleWeekNumber"
                           ref={register({required: true, pattern: /^[1-9]+[0-9]*$/})}
                           id="scheduleWeekNumber"
                           defaultValue={props.weekNumber}
                    />
                    {errors.scheduleWeekNumber ?
                        <p className="error-message">{errors.scheduleWeekNumber.message}</p> : null}
                    {errors.scheduleWeekNumber?.type === "pattern" &&
                    <p className="error-message">Podany numer musi być liczbą pozytywną</p>}
                </div>

                {width < 900 ? <MobileView control={control}/> : <DesktopView monday={props.monday} control={control}/>}

            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        recipes: state.recipes.recipes,
        name: state.addScheduleForm.schedule.name,
        description: state.addScheduleForm.schedule.description,
        weekNumber: state.addScheduleForm.schedule.weekNumber,
        monday: state.addScheduleForm.schedule.monday,
        userId: state.auth.userId,
        scheduleId: state.addScheduleForm.schedule.id,
        isScheduleEdit: state.addScheduleForm.isScheduleEdit
    }
};

export default connect(mapStateToProps, {addSchedule, editSchedule})(AddSchedule);