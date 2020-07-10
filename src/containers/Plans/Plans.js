import React from 'react';
import './Plans.scss';

const Plans = () => {
    return (
        <>
            <div className="plans">
                <div className="plans__header">
                    <h3>LISTA PLANOW</h3>
                    <i className="fas fa-plus-square"/>
                </div>
                <div className="plans__row plans__header-row">
                    <div className="plans__col-1">
                        ID
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

                <div className="plans__row">
                    <div className="plans__col-1">
                        22
                    </div>
                    <div className="plans__col-3">
                        Zapiekanka z ziemniakami
                    </div>
                    <div className="plans__col-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aperiam culpa
                        dignissimos dolorum enim facere illum laborum, nam quos!
                    </div>
                    <div className="plans__col-1">
                        45
                    </div>
                    <div className="plans__col-2">
                        <i className="fas fa-edit edit"/> <i className="fas fa-trash-alt trash"/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Plans;