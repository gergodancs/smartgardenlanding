import React from 'react'
import {useTranslation} from "react-i18next";

const Details = ()=>{

    const {t} = useTranslation();
    return (
        <section className="details">
            <h2 style={{textAlign: "center"}}>{t('about.title')}</h2>
            <p>{t('about.intro')}</p>

            <div className="about-item">
                <h3>{t('about.offerFreeSurvey.title')}</h3>
                <p>{t('about.offerFreeSurvey.desc')}</p>
            </div>

            <div className="about-item">
                <h3>{t('about.inhouseTech.title')}</h3>
                <p>{t('about.inhouseTech.desc')}</p>
            </div>

            <div className="about-item">
                <h3>{t('about.whyChoose.title')}</h3>
                <ul>
                    {(t('about.whyChoose.points', {returnObjects: true}) as string[]).map((pt, i) => (
                        <li key={i}>{pt}</li>
                    ))}

                </ul>
            </div>

            <p className="cta-text">{t('about.callToAction.text')}</p>
        </section>
    )
}

export default Details;