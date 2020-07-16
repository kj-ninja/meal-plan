import React from 'react';
import {connect} from 'react-redux';
import {addSchedule, editSchedule} from '../../store/actions/schedules';
import {useForm} from "react-hook-form";
import useWindowWidth from "../../functions/customHooks/useWindowWidth";
import './AddSchedule.scss';
import MobileView from "./MobileView/MobileView";
import DesktopView from "./DesktopView/DesktopView";


const AddSchedule = (props) => {
    const {schedule, addSchedule, editSchedule} = props;
    const {register, handleSubmit, errors, control, getValues} = useForm();
    const width = useWindowWidth();

    console.log(errors);

    const handleAddSchedule = () => {
        if (props.isScheduleEdit) {
            const monday = [getValues('monday[0]').label, getValues('monday[1]').label, getValues('monday[2]').label, getValues('monday[3]').label];
            const tuesday = [getValues('tuesday[0]').label, getValues('tuesday[1]').label, getValues('tuesday[2]').label, getValues('tuesday[3]').label];
            const wednesday = [getValues('wednesday[0]').label, getValues('wednesday[1]').label, getValues('wednesday[2]').label, getValues('wednesday[3]').label];
            const thursday = [getValues('thursday[0]').label, getValues('thursday[1]').label, getValues('thursday[2]').label, getValues('thursday[3]').label];
            const friday = [getValues('friday[0]').label, getValues('friday[1]').label, getValues('friday[2]').label, getValues('friday[3]').label];
            const saturday = [getValues('saturday[0]').label, getValues('saturday[1]').label, getValues('saturday[2]').label, getValues('saturday[3]').label];
            const sunday = [getValues('sunday[0]').label, getValues('sunday[1]').label, getValues('sunday[2]').label, getValues('sunday[3]').label];
            const scheduleToApi = {
                name: getValues('scheduleName'),
                description: getValues('scheduleDescription'),
                weekNumber: getValues('scheduleWeekNumber'),
                days: [
                    {name: 'monday', meals: monday}, {name: 'tuesday', meals: tuesday},
                    {name: 'wednesday', meals: wednesday}, {name: 'thursday', meals: thursday},
                    {name: 'friday', meals: friday}, {name: 'saturday', meals: saturday},
                    {name: 'sunday', meals: sunday}
                ],
                userId: props.userId
            }
            editSchedule(props.token, schedule.id, props.userId, scheduleToApi);
            props.history.push('/dashboard/schedules');
        } else {
            const monday = [getValues('monday[0]').label, getValues('monday[1]').label, getValues('monday[2]').label, getValues('monday[3]').label];
            const tuesday = [getValues('tuesday[0]').label, getValues('tuesday[1]').label, getValues('tuesday[2]').label, getValues('tuesday[3]').label];
            const wednesday = [getValues('wednesday[0]').label, getValues('wednesday[1]').label, getValues('wednesday[2]').label, getValues('wednesday[3]').label];
            const thursday = [getValues('thursday[0]').label, getValues('thursday[1]').label, getValues('thursday[2]').label, getValues('thursday[3]').label];
            const friday = [getValues('friday[0]').label, getValues('friday[1]').label, getValues('friday[2]').label, getValues('friday[3]').label];
            const saturday = [getValues('saturday[0]').label, getValues('saturday[1]').label, getValues('saturday[2]').label, getValues('saturday[3]').label];
            const sunday = [getValues('sunday[0]').label, getValues('sunday[1]').label, getValues('sunday[2]').label, getValues('sunday[3]').label];
            const scheduleToApi = {
                name: getValues('scheduleName'),
                description: getValues('scheduleDescription'),
                weekNumber: getValues('scheduleWeekNumber'),
                days: [
                    {name: 'monday', meals: monday}, {name: 'tuesday', meals: tuesday},
                    {name: 'wednesday', meals: wednesday}, {name: 'thursday', meals: thursday},
                    {name: 'friday', meals: friday}, {name: 'saturday', meals: saturday},
                    {name: 'sunday', meals: sunday}
                ],
                userId: props.userId
            }
            addSchedule(props.token, scheduleToApi);
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
                           defaultValue={props.schedule.name}
                    />
                    {errors.recipeName ? <p className="error-message">{errors.recipeName.message}</p> : null}
                </div>

                <div className="add-schedule__input-container">
                    <label htmlFor="scheduleDescription">Opis planu</label>
                    <textarea name="scheduleDescription"
                              ref={register}
                              id="scheduleDescription"
                              rows={3}
                              defaultValue={schedule.description}
                    />
                    {errors.recipeDescription ?
                        <p className="error-message">{errors.recipeDescription.message}</p> : null}
                </div>

                <div className="add-schedule__input-container">
                    <label htmlFor="scheduleWeekNumber">Numer tygodnia</label>
                    <input name="scheduleWeekNumber"
                           ref={register({required: true, pattern: /^[1-9]+[0-9]*$/})}
                           id="scheduleWeekNumber"
                           defaultValue={schedule.weekNumber}
                    />
                    {errors.scheduleWeekNumber ?
                        <p className="error-message">{errors.scheduleWeekNumber.message}</p> : null}
                    {errors.scheduleWeekNumber?.type === "pattern" &&
                    <p className="error-message">Podany numer musi być liczbą pozytywną</p>}
                </div>
                {props.recipes.length > 0 ? width < 900 ?
                <MobileView errors={errors} register={register} recipes={props.recipes} days={schedule.days} control={control}/> :
                <DesktopView errors={errors} register={register} recipes={props.recipes} days={schedule.days} control={control}/> : null}
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        recipes: state.recipes.recipes,
        schedule: state.addScheduleForm.schedule,
        userId: state.auth.userId,
        isScheduleEdit: state.addScheduleForm.isScheduleEdit
    }
};

export default connect(mapStateToProps, {addSchedule, editSchedule})(AddSchedule);