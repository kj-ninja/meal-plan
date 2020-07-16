import React from 'react';
import {Controller} from "react-hook-form";
import ReactSelect from "react-select";
import './MobileView.scss';
import {ErrorMessage} from "@hookform/error-message";

const MobileView = ({control, recipes, days, errors}) => {
    return (
        <>
            <div className="add-schedule__row--mobile add-schedule__days--mobile">
                <div className="add-schedule__col-2--mobile">Monday</div>
                <div className="add-schedule__col-2--mobile">Tuesday</div>
            </div>

            {days.slice(0, 4).map((day, i) => (
                <div className="add-schedule__row--mobile" key={i}>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "This is required"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "brak przepisu", label: "Brak przepisu"},
                                    {value: "zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            name={`monday[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[0].meals.length > 1 ? {
                                value: days[0].meals[i],
                                label: days[0].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`monday[${i}]`} as={<p id="error"></p>}/>
                    </div>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "This is required"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "brak przepisu", label: "Brak przepisu"},
                                    {value: "zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            name={`tuesday[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[1].meals.length > 1 ? {
                                value: days[1].meals[i],
                                label: days[1].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`tuesday[${i}]`} as={<p id="error"></p>}/>
                    </div>
                </div>
            ))}


            <div className="add-schedule__row--mobile add-schedule__days--mobile">
                <div className="add-schedule__col-2--mobile">Sroda</div>
                <div className="add-schedule__col-2--mobile">Czwartek</div>
            </div>

            {days.slice(0, 4).map((day, i) => (
                <div className="add-schedule__row--mobile" key={i}>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "This is required"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "brak przepisu", label: "Brak przepisu"},
                                    {value: "zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            name={`wednesday[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[2].meals.length > 1 ? {
                                value: days[2].meals[i],
                                label: days[2].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`wednesday[${i}]`} as={<p id="error"></p>}/>
                    </div>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "This is required"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "brak przepisu", label: "Brak przepisu"},
                                    {value: "zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            name={`thursday[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[3].meals.length > 1 ? {
                                value: days[3].meals[i],
                                label: days[3].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`thursday[${i}]`} as={<p id="error"></p>}/>
                    </div>
                </div>
            ))}

            <div className="add-schedule__row--mobile add-schedule__days--mobile">
                <div className="add-schedule__col-2--mobile">Piatek</div>
                <div className="add-schedule__col-2--mobile">Sobota</div>
            </div>

            {days.slice(0, 4).map((day, i) => (
                <div className="add-schedule__row--mobile" key={i}>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "This is required"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "brak przepisu", label: "Brak przepisu"},
                                    {value: "zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            name={`friday[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[4].meals.length > 1 ? {
                                value: days[4].meals[i],
                                label: days[4].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`friday[${i}]`} as={<p id="error"></p>}/>
                    </div>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "This is required"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "brak przepisu", label: "Brak przepisu"},
                                    {value: "zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            name={`saturday[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[5].meals.length > 1 ? {
                                value: days[5].meals[i],
                                label: days[5].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`saturday[${i}]`} as={<p id="error"></p>}/>
                    </div>
                </div>
            ))}

            <div className="add-schedule__row--mobile add-schedule__days--mobile">
                <div className="add-schedule__col-1--mobile">Niedziela</div>
            </div>

            {days.slice(0, 4).map((day, i) => (
                <div className="add-schedule__row--mobile" key={i}>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "This is required"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "brak przepisu", label: "Brak przepisu"},
                                    {value: "zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            name={`sunday[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[6].meals.length > 1 ? {
                                value: days[6].meals[i],
                                label: days[6].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`sunday[${i}]`} as={<p id="error"></p>}/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MobileView;