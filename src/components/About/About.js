import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './About.scss';


const images = [
    require("../../assets/app-background.png"),
    require("../../assets/cta.jpg"),
    require("../../assets/meal.png")
];

const About = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="about">

            <button type="button" onClick={() => setIsOpen(true)}>
                Open Lightbox
            </button>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}

            <div className="about__container">
                <div className="about__item">
                    <i className="fas fa-cloud-upload-alt"/>
                    <div className="about__title">Zapisuj swoje przepisy</div>
                    <div className="about__description">
                        Dodawaniem usuwanie oraz edytowanie przepisów, szybko i łatwo.
                        Dostęp do listy wszystkich zapisanych przepisów, kiedy tylko chcesz!
                    </div>
                    <button>Szczegóły >></button>
                </div>
                <div className="about__item">
                    <i className="fas fa-utensils"/>
                    <h2 className="about__title">Planuj swoje posiłki</h2>
                    <div className="about__description">
                        W przypadku planów również możesz edytować, usuwać, edytować i przeglądać.
                        Ponadto podczas tworzenia nowego planu korzystasz z wcześniej zapisanych przepisów.
                    </div>
                    <button>Szczegóły >></button>
                </div>
                <div className="about__item">
                    <i className="fas fa-heartbeat"/>
                    <h2 className="about__title">Utrzymuj właściwą dietę</h2>
                    <div className="about__description">
                        Mając dostęp do całej historii planów i przepisów, masz kontrolę nad tym, co jesz, dzięki czemu możesz być dużo zdrowszy!
                    </div>
                    <button>Szczegóły >></button>
                </div>
            </div>
        </section>
    );
};

export default About;