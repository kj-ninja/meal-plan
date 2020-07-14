import React from 'react';
import {Controller} from "react-hook-form";
import ReactSelect from "react-select";
import './DesktopView.scss';

const recipes = [
    {name: 'Jajoweczka na boczku'},
    {name: 'Nalesniki'},
    {name: 'Owsianka'}
];
const days = [
    'monday'
];
// , 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'

const DesktopView = ({control, monday}) => {
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
                            defaultValue={monday.length > 1 ? monday[i] : ''}
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
                            defaultValue={monday.length > 1 ? monday[i] : ''}
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
                            defaultValue={monday.length > 1 ? monday[i] : ''}
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
                            defaultValue={monday.length > 1 ? monday[i] : ''}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default DesktopView;