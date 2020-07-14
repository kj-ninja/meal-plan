import React from 'react';
import {connect} from 'react-redux';
import './Schedules.scss';
import Spinner from "../UI/Spinner/Spinner";

const Schedules = (props) => {
    const {token, userId, loading} = props;

    if (loading) {
        return <Spinner/>;
    }
    console.log(props.schedules);

    return (
        <>
            <div className="plans">
                <div className="plans__header">
                    <h3>LISTA PLANOW</h3>
                    <i className="fas fa-plus-square"/>
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
                            {i}
                        </div>
                        <div className="plans__col-3">
                            {schedule.scheduleName}
                        </div>
                        <div className="plans__col-5">
                            {schedule.scheduleDescription}
                        </div>
                        <div className="plans__col-1">
                            {schedule.scheduleWeekNumber}
                        </div>
                        <div className="plans__col-2">
                            <i className="fas fa-edit edit"/> <i className="fas fa-trash-alt trash"/>
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
        loading: state.recipes.loading
    }
};

export default connect(mapStateToProps)(Schedules);