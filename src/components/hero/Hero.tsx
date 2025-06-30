import React from 'react'
import Image from "next/image";
import {useTranslation} from "react-i18next";
import './hero.css'

const Hero = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-text">
                        <h1>{t('hero.title')}</h1>
                        <Image className="hero-img" style={{position: "relative"}} src="/images/sprinkler-with-lawn.jpg"
                               alt={''} width={400} height={400}/>
                        <p className="hero-motto">{t('hero.motto')}</p>
                    </div>
                </div>
            </section>
            <div className="post-hero">{t('postHero')}</div>
            <a href="mailto:info@gartendienst-wien.at" className="cta-button">
                Jetzt Kontakt aufnehmen
            </a>

        </>
    )
}

export default Hero;