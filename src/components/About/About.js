import React from 'react';
import './About.scss';

const About = () => {
    return (
        <section className="about">
            <div className="about__container">
                <div className="about__item">
                    <i className="fas fa-cloud-upload-alt"/>
                    <div className="about__title">Save your recipes</div>
                    <div className="about__description">
                        You can save, edit or delete a recipe whenever you want, quickly and easily.
                        You are able to view the list of saved recipes later.
                    </div>
                    <button>View details</button>
                </div>
                <div className="about__item">
                    <i className="fas fa-utensils"/>
                    <h2 className="about__title">Plan your meals</h2>
                    <div className="about__description">
                        In the case of schedules, you can also edit, delete and view the list of schedules.
                        In addition, when creating a new plan, you use previously saved recipes.
                    </div>
                    <button>View details</button>
                </div>
                <div className="about__item">
                    <i className="fas fa-heartbeat"/>
                    <h2 className="about__title">Keep your diet on track</h2>
                    <div className="about__description">
                        Having access to the entire history of schedules and recipes, you are able to control what you eat, thanks to which you can be much healthier.
                    </div>
                    <button>View details</button>
                </div>
            </div>
        </section>
    );
};

export default About;