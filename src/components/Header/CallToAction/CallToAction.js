import React from 'react';
import {withRouter} from 'react-router-dom';
import './CallToAction.scss';

const CallToAction = (props) => {
    return (
        <>
            {/*<div className="call-to-action__overlay"/>*/}
            {/*<div className="call-to-action__background"/>*/}
            <section className="call-to-action">
                <div className="ninja">
                    <img src={require('../../../assets/ninja2.png')} alt=""/>
                </div>
                <div className="call-to-action__container">
                    <p>"To keep the body in good health is a duty…otherwise we shall not be able to keep the mind strong
                        and clear." – <span>Buddha</span></p>
                    <button type="button" onClick={()=>props.history.push('/login')}>Zaplanuj posiłki!</button>
                </div>

            </section>
        </>
    );
};

export default withRouter(CallToAction);