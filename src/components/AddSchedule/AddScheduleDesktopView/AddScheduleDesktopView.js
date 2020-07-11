import React from 'react';
import {Controller} from "react-hook-form";
import ReactSelect from "react-select";
import './AddScheduleDesktopView.scss';

const recipes = [
    {name: 'Jajoweczka na boczku'},
    {name: 'Nalesniki'},
    {name: 'Owsianka'}
];
const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const AddScheduleDesktopView = ({control}) => {
    return (
        <>
            <div className="add-schedule__row add-schedule__meals">
                <div className="add-schedule__col-1"/>
                <div className="add-schedule__col-1">SNIADANIE</div>
                <div className="add-schedule__col-1">DRUGIE SNIADANIE</div>
                <div className="add-schedule__col-1">OBIAD</div>
                <div className="add-schedule__col-1">KOLACJA</div>
            </div>
            {days.map((day, i) => (
                <div className="add-schedule__row">
                    <div className="add-schedule__col-1 scheduleDay">{day.toUpperCase()}</div>
                    <div className="add-schedule__col-1">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`${day}[0]`}
                            isClearable
                            control={control}
                        />
                    </div>
                    <div className="add-schedule__col-1">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`${day}[1]`}
                            isClearable
                            control={control}
                        />
                    </div>
                    <div className="add-schedule__col-1">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`${day}[2]`}
                            isClearable
                            control={control}
                        />
                    </div>
                    <div className="add-schedule__col-1">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`${day}[3]`}
                            isClearable
                            control={control}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default AddScheduleDesktopView;