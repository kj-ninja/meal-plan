import React from 'react';
import {connect} from 'react-redux';
import {deleteSchedule} from '../../store/actions/schedules';
import {mapScheduleToEdit, clearAddScheduleForm} from '../../store/actions/addScheduleForm';
import './Schedules.scss';
import Spinner from "../UI/Spinner/Spinner";

const Schedules = (props) => {
    const {token, userId, loading} = props;

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

    return (
        <>
            <div className="plans">
                <div className="plans__header">
                    <h3>LISTA PLANOW</h3>
                    <i className="fas fa-plus-square" onClick={handleAddSchedule}/>
                </div>
                <div className="plans__row plans__row-header">
                    <div className="plans__col-1">
                        LP
                    </div>
                    <div className="plans__col-3">
                        NAZWA
                    </div>
                    <div className="plans__col-5">
                        OPIS
                    </div>
                    <div className="plans__col-1">
                        TYDZIEN
                    </div>
                    <div className="plans__col-2">
                        AKCJE
                    </div>
                </div>
                {props.schedules.map((schedule, i) => (
                    <div className="plans__row" key={i}>
                        <div className="plans__col-1">
                            {i+1}
                        </div>
                        <div className="plans__col-3">
                            {schedule.name}
                        </div>
                        <div className="plans__col-5">
                            {schedule.description}
                        </div>
                        <div className="plans__col-1">
                            {schedule.weekNumber}
                        </div>
                        <div className="plans__col-2">
                            <i className="fas fa-edit edit" onClick={()=>handleEditSchedule(schedule)}/>
                            <i className="fas fa-trash-alt trash"
                               onClick={() => props.deleteSchedule(token, schedule.id, userId)}/>
                        </div>
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