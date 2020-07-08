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
                        Accusamus dolorem molestiae placeat possimus quos. Alias, architecto, cupiditate dolor dolorem
                        error est ex hic ipsa, ipsum necessitatibus non obcaecati perferendis provident?
                    </div>
                    <button>View details >></button>
                </div>
                <div className="about__item">
                    <i className="fas fa-utensils"/>
                    <h2 className="about__title">Plan your meals</h2>
                    <div className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus amet dolore itaque praesentium ut. Aperiam consequuntur, doloremque, ea hic, itaque
                        laudantium minima non obcaecati quam qui rem sequi sint tenetur!
                    </div>
                    <button>View details >></button>
                </div>
                <div className="about__item">
                    <i className="fas fa-heartbeat"/>
                    <h2 className="about__title">Keep your diet on track</h2>
                    <div className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad,
                        alias aliquid animi consequuntur debitis facere fugiat id illo ipsam iure laborum modi odio
                        officiis porro quia unde vero voluptates.
                    </div>
                    <button>View details >></button>
                </div>
            </div>
        </section>
    );
};

export default About;