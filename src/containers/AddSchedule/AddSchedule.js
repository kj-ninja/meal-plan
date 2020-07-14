import React from 'react';
import {useForm} from "react-hook-form";
import useWindowWidth from "../../functions/customHooks/useWindowWidth";
import './AddSchedule.scss';
import AddScheduleMobileView from "./AddScheduleMobileView/AddScheduleMobileView";
import AddScheduleDesktopView from "./AddScheduleDesktopView/AddScheduleDesktopView";

const AddSchedule = () => {
    const {register, handleSubmit, errors, control} = useForm();
    const width = useWindowWidth();

    const handleAddSchedule = (data) => {
        console.log(data);
    };
    return (
        <div className="add-schedule">
            <div className="add-schedule__header">
                <h3>Nowy plan</h3>
                <button>Zapisz i zamknij</button>
            </div>
            <form onSubmit={handleSubmit(handleAddSchedule)} className="add-schedule__form">
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

                {width < 900 ? <AddScheduleMobileView control={control}/> : <AddScheduleDesktopView control={control}/>}

                <button type="submit">Wyslij</button>
            </form>
        </div>
    );
};

export default AddSchedule;