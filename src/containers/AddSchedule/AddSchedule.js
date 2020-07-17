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

    const handleAddSchedule = () => {
        if (props.isScheduleEdit) {
            const monday = [getValues('poniedziałek[0]').label, getValues('poniedziałek[1]').label, getValues('poniedziałek[2]').label, getValues('poniedziałek[3]').label];
            const tuesday = [getValues('wtorek[0]').label, getValues('wtorek[1]').label, getValues('wtorek[2]').label, getValues('wtorek[3]').label];
            const wednesday = [getValues('środa[0]').label, getValues('środa[1]').label, getValues('środa[2]').label, getValues('środa[3]').label];
            const thursday = [getValues('czwartek[0]').label, getValues('czwartek[1]').label, getValues('czwartek[2]').label, getValues('czwartek[3]').label];
            const friday = [getValues('piątek[0]').label, getValues('piątek[1]').label, getValues('piątek[2]').label, getValues('piątek[3]').label];
            const saturday = [getValues('sobota[0]').label, getValues('sobota[1]').label, getValues('sobota[2]').label, getValues('sobota[3]').label];
            const sunday = [getValues('niedziela[0]').label, getValues('niedziela[1]').label, getValues('niedziela[2]').label, getValues('niedziela[3]').label];
            const scheduleToApi = {
                name: getValues('scheduleName'),
                description: getValues('scheduleDescription'),
                weekNumber: getValues('scheduleWeekNumber'),
                days: [
                    {name: 'poniedziałek', meals: monday}, {name: 'wtorek', meals: tuesday},
                    {name: 'środa', meals: wednesday}, {name: 'czwartek', meals: thursday},
                    {name: 'piątek', meals: friday}, {name: 'sobota', meals: saturday},
                    {name: 'niedziela', meals: sunday}
                ],
                userId: props.userId
            }
            editSchedule(props.token, schedule.id, props.userId, scheduleToApi);
            props.history.push('/dashboard/schedules');
        } else {
            const monday = [getValues('poniedziałek[0]').label, getValues('poniedziałek[1]').label, getValues('poniedziałek[2]').label, getValues('poniedziałek[3]').label];
            const tuesday = [getValues('wtorek[0]').label, getValues('wtorek[1]').label, getValues('wtorek[2]').label, getValues('wtorek[3]').label];
            const wednesday = [getValues('środa[0]').label, getValues('środa[1]').label, getValues('środa[2]').label, getValues('środa[3]').label];
            const thursday = [getValues('czwartek[0]').label, getValues('czwartek[1]').label, getValues('czwartek[2]').label, getValues('czwartek[3]').label];
            const friday = [getValues('piątek[0]').label, getValues('piątek[1]').label, getValues('piątek[2]').label, getValues('piątek[3]').label];
            const saturday = [getValues('sobota[0]').label, getValues('sobota[1]').label, getValues('sobota[2]').label, getValues('sobota[3]').label];
            const sunday = [getValues('niedziela[0]').label, getValues('niedziela[1]').label, getValues('niedziela[2]').label, getValues('niedziela[3]').label];
            const scheduleToApi = {
                name: getValues('scheduleName'),
                description: getValues('scheduleDescription'),
                weekNumber: getValues('scheduleWeekNumber'),
                days: [
                    {name: 'poniedziałek', meals: monday}, {name: 'wtorek', meals: tuesday},
                    {name: 'środa', meals: wednesday}, {name: 'czwartek', meals: thursday},
                    {name: 'piątek', meals: friday}, {name: 'sobota', meals: saturday},
                    {name: 'niedziela', meals: sunday}
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