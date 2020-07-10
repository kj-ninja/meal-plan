import React from 'react';
import {Controller} from "react-hook-form";
import ReactSelect from "react-select";
import './AddScheduleMobileView.scss';

const recipes = [
    {name: 'Jajoweczka na boczku'},
    {name: 'Nalesniki'},
    {name: 'Owsianka'}
];
const days = [
    {day0: 'Monday', day1: 'Tuesday'},
    {day2: 'Wednesday', day3: 'Thursday'},
    {day4: 'Friday', day5: 'Saturday'},
    {day6: 'Sunday'}
];

const AddScheduleMobileView = ({control}) => {
    return (
        <>
            <div className="add-schedule__row--mobile add-schedule__days--mobile">
                <div className="add-schedule__col-2--mobile day">Monday</div>
                <div className="add-schedule__col-2--mobile day">Tuesday</div>
            </div>
            {days.map((day, i) => (
                <div className="add-schedule__row--mobile plan__meals" key={i}>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`Poniedzialek[${i}]`}
                            isClearable
                            control={control}
                        />
                    </div>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`Wtorek[${i}]`}
                            isClearable
                            control={control}
                        />
                    </div>
                </div>
            ))}
            <div className="add-schedule__row--mobile add-schedule__days--mobile">
                <div className="add-schedule__col-2--mobile day">Sroda</div>
                <div className="add-schedule__col-2--mobile day">Czwartek</div>
            </div>
            {days.map((day, i) => (
                <div className="add-schedule__row--mobile plan__meals" key={i}>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`Sroda[${i}]`}
                            isClearable
                            control={control}
                        />
                    </div>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`Czwartek[${i}]`}
                            isClearable
                            control={control}
                        />
                    </div>
                </div>
            ))}

            <div className="add-schedule__row--mobile add-schedule__days--mobile">
                <div className="add-schedule__col-2--mobile day">Piatek</div>
                <div className="add-schedule__col-2--mobile day">Sobota</div>
            </div>
            {days.map((day, i) => (
                <div className="add-schedule__row--mobile plan__meals" key={i}>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`Piatek[${i}]`}
                            isClearable
                            control={control}
                        />
                    </div>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`Sobota[${i}]`}
                            isClearable
                            control={control}
                        />
                    </div>
                </div>
            ))}

            <div className="add-schedule__row--mobile add-schedule__days--mobile">
                <div className="add-schedule__col-1--mobile day">Niedziela</div>
            </div>
            {days.map((day, i) => (
                <div className="add-schedule__row--mobile plan__meals" key={i}>
                    <div className="add-schedule__col-1--mobile">
                        <Controller
                            as={ReactSelect}
                            options={recipes.map(recipe => {
                                return {
                                    value: recipe,
                                    label: recipe.name
                                }
                            })}
                            name={`Niedziela[${i}]`}
                            isClearable
                            control={control}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default AddScheduleMobileView;