import React from 'react';
import {Controller} from "react-hook-form";
import ReactSelect from "react-select";
import './DesktopView.scss';
import { ErrorMessage } from "@hookform/error-message";

const DesktopView = ({control, recipes, days, errors}) => {
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
                            options={
                                [
                                    { value: "brak przepisu", label: "Brak przepisu" },
                                    { value: "zjem na mieście", label: "Zjem na mieście" },
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            placeholder="Wybierz..."
                            name={`${day.name}[0]`}
                            isClearable
                            control={control}
                            defaultValue={day.meals.length > 1 ? { value: day.meals[0], label: day.meals[0] } : ''}
                        />
                        <ErrorMessage errors={errors} name={`${day.name}${day.meals}[0]`} as={<p id="error"></p>}/>
                    </div>
                    <div className="add-schedule__col-1">
                        <Controller
                            as={ReactSelect}
                            options={
                                [
                                    { value: "brak przepisu", label: "Brak przepisu" },
                                    { value: "zjem na mieście", label: "Zjem na mieście" },
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            placeholder="Wybierz..."
                            name={`${day.name}[1]`}
                            isClearable
                            control={control}
                            defaultValue={day.meals.length > 1 ? { value: day.meals[1], label: day.meals[1] } : ''}
                        />
                        <ErrorMessage errors={errors} name={`${day.name}${day.meals}[1]`} as={<p id="error"></p>}/>
                    </div>
                    <div className="add-schedule__col-1">
                        <Controller
                            as={ReactSelect}
                            options={
                                [
                                    { value: "Brak przepisu", label: "Brak przepisu" },
                                    { value: "Zjem na mieście", label: "Zjem na mieście" },
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            placeholder="Wybierz..."
                            name={`${day.name}[2]`}
                            isClearable
                            control={control}
                            defaultValue={day.meals.length > 1 ? { value: day.meals[2], label: day.meals[2] } : ''}
                        />
                        <ErrorMessage errors={errors} name={`${day.name}${day.meals}[2]`} as={<p id="error"></p>}/>
                    </div>
                    <div className="add-schedule__col-1">
                        <Controller
                            as={ReactSelect}
                            options={
                                [
                                    { value: "brak przepisu", label: "Brak przepisu" },
                                    { value: "zjem na mieście", label: "Zjem na mieście" },
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            placeholder="Wybierz..."
                            name={`${day.name}[3]`}
                            isClearable
                            control={control}
                            defaultValue={day.meals.length > 1 ? { value: day.meals[3], label: day.meals[3] } : ''}
                        />
                        <ErrorMessage errors={errors} name={`${day.name}${day.meals}[3]`} as={<p id="error"></p>}/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default DesktopView;