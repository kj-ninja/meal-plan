import React, {useState} from 'react';
import {connect} from 'react-redux';
import {deleteSchedule} from '../../store/actions/schedules';
import {mapScheduleToEdit, clearAddScheduleForm} from '../../store/actions/addScheduleForm';
import './Schedules.scss';
import Spinner from "../UI/Spinner/Spinner";
import useWindowWidth from "../../functions/customHooks/useWindowWidth";
import Backdrop from "../UI/Backdrop/Backdrop";
import SchedulesDetails from "./SchedulesDetails";

const Schedules = (props) => {
    const [modal, setModal] = useState(false);
    const [scheduleToShow, setScheduleToShow] = useState(null);
    const {token, userId, loading} = props;
    const width = useWindowWidth();

    if (loading) {
        return <Spinner/>;
    }

    const handleAddSchedule = () => {
        props.clearAddScheduleForm();
        props.history.push('/dashboard/add-schedule');
    };

    const handleEditSchedule = (schedule) => {
        props.mapScheduleToEdit(schedule);
        props.history.push('/dashboard/add-schedule');
    };

    const handleShowSchedule = (scheduleId) => {
        setModal(true);
        setScheduleToShow(props.findSchedule(scheduleId));
    };

    return (
        <>
            <div className="plans">
                {width < 900 ?
                    <>
                        <Backdrop show={modal} cancel={() => setModal(false)}/>
                        {modal ? <SchedulesDetails scheduleToShow={scheduleToShow} view="mobile"/> : null}
                        <div className="plans__header">
                            <h3>LISTA PLANÓW</h3>
                            <i className="fas fa-plus-square" onClick={handleAddSchedule}/>
                        </div>
                        <div className="plans__row plans__row-header">
                            <div className="plans__col-3">
                                NAZWA
                            </div>
                            <div className="plans__col-4">
                                OPIS
                            </div>
                            <div className="plans__col-3">
                                TYDZIEŃ
                            </div>
                            <div className="plans__col-2">
                                AKCJE
                            </div>
                        </div>
                    </> :
                    <>
                        <Backdrop show={modal} cancel={() => setModal(false)}/>
                        {modal ? <SchedulesDetails scheduleToShow={scheduleToShow} view="desktop"/> : null}
                        <div className="plans__header">
                            <h3>LISTA PLANÓW</h3>
                            <i className="fas fa-plus-square" onClick={handleAddSchedule}/>
                        </div>
                        <div className="plans__row plans__row-header">
                            <div className="plans__col-1">
                                LP
                            </div>
                            <div className="plans__col-3">
                                NAZWA
                            </div>
                            <div className="plans__col-4">
                                OPIS
                            </div>
                            <div className="plans__col-2">
                                TYDZIEŃ
                            </div>
                            <div className="plans__col-2">
                                AKCJE
                            </div>
                        </div>
                    </>}

                {props.schedules.map((schedule, i) => (
                    <div className="plans__row" key={i} onClick={()=>handleShowSchedule(schedule.id)}>
                        {width < 900 ?
                            <>
                                <div className="plans__col-3">
                                    {schedule.name}
                                </div>
                                <div className="plans__col-4">
                                    {schedule.description}
                                </div>
                                <div className="plans__col-3">
                                    {schedule.weekNumber}
                                </div>
                                <div className="plans__col-2">
                                    <i className="fas fa-edit edit" onClick={() => handleEditSchedule(schedule)}/>
                                    <i className="fas fa-trash-alt trash"
                                       onClick={() => props.deleteSchedule(token, schedule.id, userId)}/>
                                </div>
                            </> :
                            <>
                                <div className="plans__col-1">
                                    {i + 1}
                                </div>
                                <div className="plans__col-3 name">
                                    {schedule.name}
                                </div>
                                <div className="plans__col-4 description">
                                    {schedule.description}
                                </div>
                                <div className="plans__col-2 week">
                                    {schedule.weekNumber}
                                </div>
                                <div className="plans__col-2">
                                    <i className="fas fa-edit edit" onClick={() => handleEditSchedule(schedule)}/>
                                    <i className="fas fa-trash-alt trash"
                                       onClick={() => props.deleteSchedule(token, schedule.id, userId)}/>
                                </div>
                            </>}
                    </div>
                ))}
            </div>

        </>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        loading: state.schedules.loading
    }
};

export default connect(mapStateToProps, {deleteSchedule, mapScheduleToEdit, clearAddScheduleForm})(Schedules);