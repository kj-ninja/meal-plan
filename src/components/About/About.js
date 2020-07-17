import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './About.scss';


const recipesImages = [
    require("../../assets/add-przepis.png"),
    require("../../assets/przepisy.png")
];
const plansImages = [
    require("../../assets/add-plan.png"),
    require("../../assets/plany.png")
];
const pulpitImage = [
    require("../../assets/pulpit.png")
];

const About = () => {
    const [photoIndexRecipes, setPhotoIndexRecipes] = useState(0);
    const [photoIndexPlans, setPhotoIndexPlans] = useState(0);
    const [isRecipesOpen, setIsRecipesOpen] = useState(false);
    const [isPlansOpen, setIsPlansOpen] = useState(false);
    const [isPulpitOpen, setIsPulpitOpen] = useState(false);

    return (
        <section className="about">
            {isRecipesOpen && (
                <Lightbox
                    mainSrc={recipesImages[photoIndexRecipes]}
                    nextSrc={recipesImages[(photoIndexRecipes + 1) % recipesImages.length]}
                    prevSrc={recipesImages[(photoIndexRecipes + recipesImages.length - 1) % recipesImages.length]}
                    onCloseRequest={() => setIsRecipesOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndexRecipes((photoIndexRecipes + recipesImages.length - 1) % recipesImages.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndexRecipes((photoIndexRecipes + 1) % recipesImages.length)
                    }
                />
            )}
            {isPlansOpen && (
                <Lightbox
                    mainSrc={plansImages[photoIndexPlans]}
                    nextSrc={plansImages[(photoIndexPlans + 1) % plansImages.length]}
                    prevSrc={plansImages[(photoIndexPlans + plansImages.length - 1) % plansImages.length]}
                    onCloseRequest={() => setIsPlansOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndexPlans((photoIndexPlans + plansImages.length - 1) % plansImages.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndexPlans((photoIndexPlans + 1) % plansImages.length)
                    }
                />
            )}
            {isPulpitOpen && (
                <Lightbox
                    mainSrc={pulpitImage[0]}
                    onCloseRequest={() => setIsPulpitOpen(false)}
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
                    <button type="button" onClick={()=>setIsRecipesOpen(true)}>Szczegóły >></button>
                </div>
                <div className="about__item">
                    <i className="fas fa-utensils"/>
                    <h2 className="about__title">Planuj swoje posiłki</h2>
                    <div className="about__description">
                        W przypadku planów również możesz edytować, usuwać, edytować i przeglądać.
                        Ponadto podczas tworzenia nowego planu korzystasz z wcześniej zapisanych przepisów.
                    </div>
                    <button type="button" onClick={()=>setIsPlansOpen(true)}>Szczegóły >></button>
                </div>
                <div className="about__item">
                    <i className="fas fa-heartbeat"/>
                    <h2 className="about__title">Utrzymuj właściwą dietę</h2>
                    <div className="about__description">
                        Mając dostęp do całej historii planów i przepisów, masz kontrolę nad tym, co jesz, dzięki czemu możesz być dużo zdrowszy!
                    </div>
                    <button type="button" onClick={()=>setIsPulpitOpen(true)}>Szczegóły >></button>
                </div>
            </div>
        </section>
    );
};

export default About;