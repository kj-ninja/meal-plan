import React from 'react';
import {Controller} from "react-hook-form";
import ReactSelect from "react-select";
import './MobileView.scss';
import {ErrorMessage} from "@hookform/error-message";

const MobileView = ({control, recipes, days, errors}) => {
    return (
        <>
            <div className="add-schedule__row--mobile add-schedule__days--mobile">
                <div className="add-schedule__col-2--mobile">Poniedziałek</div>
                <div className="add-schedule__col-2--mobile">Wtorek</div>
            </div>

            {days.slice(0, 4).map((day, i) => (
                <div className="add-schedule__row--mobile" key={i}>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "Pole wymagane"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "Brak przepisu", label: "Brak przepisu"},
                                    {value: "Zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            placeholder="Wybierz..."
                            name={`poniedziałek[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[0].meals.length > 1 ? {
                                value: days[0].meals[i],
                                label: days[0].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`poniedziałek[${i}]`} as={<p id="error"></p>}/>
                    </div>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "Pole wymagane"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "Brak przepisu", label: "Brak przepisu"},
                                    {value: "Zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            placeholder="Wybierz..."
                            name={`wtorek[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[1].meals.length > 1 ? {
                                value: days[1].meals[i],
                                label: days[1].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`wtorek[${i}]`} as={<p id="error"></p>}/>
                    </div>
                </div>
            ))}


            <div className="add-schedule__row--mobile add-schedule__days--mobile">
                <div className="add-schedule__col-2--mobile">Środa</div>
                <div className="add-schedule__col-2--mobile">Czwartek</div>
            </div>

            {days.slice(0, 4).map((day, i) => (
                <div className="add-schedule__row--mobile" key={i}>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "Pole wymagane"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "Brak przepisu", label: "Brak przepisu"},
                                    {value: "Zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            placeholder="Wybierz..."
                            name={`środa[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[2].meals.length > 1 ? {
                                value: days[2].meals[i],
                                label: days[2].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`środa[${i}]`} as={<p id="error"></p>}/>
                    </div>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "Pole wymagane"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "Brak przepisu", label: "Brak przepisu"},
                                    {value: "Zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            placeholder="Wybierz..."
                            name={`czwartek[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[3].meals.length > 1 ? {
                                value: days[3].meals[i],
                                label: days[3].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`czwartek[${i}]`} as={<p id="error"></p>}/>
                    </div>
                </div>
            ))}

            <div className="add-schedule__row--mobile add-schedule__days--mobile">
                <div className="add-schedule__col-2--mobile">Piątek</div>
                <div className="add-schedule__col-2--mobile">Sobota</div>
            </div>

            {days.slice(0, 4).map((day, i) => (
                <div className="add-schedule__row--mobile" key={i}>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "Pole wymagane"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "Brak przepisu", label: "Brak przepisu"},
                                    {value: "Zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            placeholder="Wybierz..."
                            name={`piątek[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[4].meals.length > 1 ? {
                                value: days[4].meals[i],
                                label: days[4].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`piątek[${i}]`} as={<p id="error"></p>}/>
                    </div>
                    <div className="add-schedule__col-2--mobile">
                        <Controller
                            rules={{required: "Pole wymagane"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "Brak przepisu", label: "Brak przepisu"},
                                    {value: "Zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            placeholder="Wybierz..."
                            name={`sobota[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[5].meals.length > 1 ? {
                                value: days[5].meals[i],
                                label: days[5].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`sobota[${i}]`} as={<p id="error"></p>}/>
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
                            rules={{required: "Pole wymagane"}}
                            as={ReactSelect}
                            options={
                                [
                                    {value: "Brak przepisu", label: "Brak przepisu"},
                                    {value: "Zjem na mieście", label: "Zjem na mieście"},
                                    ...recipes.map(recipe => {
                                        return {
                                            value: recipe,
                                            label: recipe.name
                                        }
                                    })
                                ]
                            }
                            placeholder="Wybierz..."
                            name={`niedziela[${i}]`}
                            isClearable
                            control={control}
                            defaultValue={days[6].meals.length > 1 ? {
                                value: days[6].meals[i],
                                label: days[6].meals[i]
                            } : ''}
                        />
                        <ErrorMessage errors={errors} name={`niedziela[${i}]`} as={<p id="error"></p>}/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MobileView;