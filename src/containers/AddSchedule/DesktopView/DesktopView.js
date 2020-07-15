import React from 'react';
import {Controller} from "react-hook-form";
import ReactSelect from "react-select";
import './DesktopView.scss';

const DesktopView = ({control, recipes, days}) => {

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
                <div className="add-schedule__row" key={i}>
                    <div className="add-schedule__col-1 scheduleDay">{day.name.toUpperCase()}</div>
                    <div className="add-schedule__col-1">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`${day.name}${day.meals}[0]`}
                            isClearable
                            control={control}
                            defaultValue={day.meals.length > 1 ? day.meals[0] : ''}
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
                            name={`${day.name}${day.meals}[1]`}
                            isClearable
                            control={control}
                            defaultValue={day.meals.length > 1 ? day.meals[1] : ''}
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
                            name={`${day.name}${day.meals}[2]`}
                            isClearable
                            control={control}
                            defaultValue={day.meals.length > 1 ? day.meals[2] : ''}
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
                            name={`${day.name}${day.meals}[3]`}
                            isClearable
                            control={control}
                            defaultValue={day.meals.length > 1 ? day.meals[3] : ''}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default DesktopView;