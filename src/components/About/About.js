import React from 'react';
import './About.scss';

const About = () => {
    return (
        <section className="about">
            <div className="about__container">
                <div className="about__item">
                    <i className="fas fa-cloud-upload-alt"/>
                    <div className="about__title">Save your recipes</div>
                    <div className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid cum fugit, id labore libero molestiae mollitia optio perferendis quae suscipit!
                    </div>
                    <button>View details</button>
                </div>
                <div className="about__item">
                    <i className="fas fa-utensils"/>
                    <h2 className="about__title">Plan your meals</h2>
                    <div className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                        adipisci aliquam blanditiis commodi perspiciatis, rem repellat rerum similique soluta
                        voluptatum?
                    </div>
                    <button>View details</button>
                </div>
                <div className="about__item">
                    <i className="fas fa-heartbeat"/>
                    <h2 className="about__title">Keep your diet on track</h2>
                    <div className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eveniet fuga id iure labore, nam natus quibusdam quo sapiente tempora unde.
                    </div>
                    <button>View details</button>
                </div>
            </div>
        </section>
    );
};

export default About;