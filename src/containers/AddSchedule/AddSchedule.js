import React from 'react';
import {connect} from 'react-redux';
import {addSchedule} from '../../store/actions/schedules';
import {useForm} from "react-hook-form";
import useWindowWidth from "../../functions/customHooks/useWindowWidth";
import './AddSchedule.scss';
import MobileView from "./MobileView/MobileView";
import DesktopView from "./DesktopView/DesktopView";

const AddSchedule = (props) => {
    const {register, handleSubmit, errors, control} = useForm();
    const width = useWindowWidth();

    const handleAddSchedule = (data) => {
        const schedule = {...data, userId: props.userId}
        props.addSchedule(props.token, schedule);
        console.log(schedule)
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
                    />
                    {errors.recipeName ? <p className="error-message">{errors.recipeName.message}</p> : null}
                </div>

                <div className="add-schedule__input-container">
                    <label htmlFor="scheduleDescription">Opis planu</label>
                    <textarea name="scheduleDescription"
                              ref={register}
                              id="scheduleDescription"
                              rows={3}
                    />
                    {errors.recipeDescription ?
                        <p className="error-message">{errors.recipeDescription.message}</p> : null}
                </div>

                <div className="add-schedule__input-container">
                    <label htmlFor="scheduleWeekNumber">Numer tygodnia</label>
                    <input name="scheduleWeekNumber"
                           ref={register({required: true, pattern: /^[1-9]+[0-9]*$/})}
                           id="scheduleWeekNumber"
                    />
                    {errors.scheduleWeekNumber ?
                        <p className="error-message">{errors.scheduleWeekNumber.message}</p> : null}
                    {errors.scheduleWeekNumber?.type === "pattern" &&
                    <p className="error-message">Podany numer musi być liczbą pozytywną</p>}
                </div>

                {width < 900 ? <MobileView control={control}/> : <DesktopView control={control}/>}

            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        recipes: state.recipes.recipes,
        userId: state.auth.userId
    }
};

export default connect(mapStateToProps, {addSchedule})(AddSchedule);