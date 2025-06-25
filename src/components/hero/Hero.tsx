import React from 'react'
import Image from "next/image";
import {useTranslation} from "react-i18next";

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
            <div className="post-hero">{t('postHero')}</div></>
    )
}

export default Hero;