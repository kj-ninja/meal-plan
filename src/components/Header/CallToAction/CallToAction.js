import React from 'react';
import './CallToAction.scss';

const CallToAction = () => {
    return (
        <>
            <div className="call-to-action__overlay"/>
            <div className="call-to-action__background"/>
            <section className="call-to-action">
                <div className="call-to-action__container">
                    <p>“To keep the body in good health is a duty…otherwise we shall not be able to keep the mind strong
                        and clear.” – <span>Buddha</span></p>
                    <button>Plan you meals!</button>
                </div>

            </section>
        </>
    );
};

export default CallToAction;