'use client';

import {useTranslation} from 'react-i18next';
import '@/lib/i18n.client';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {use, useEffect, useState} from "react";
import i18n from '@/lib/i18n.client';

export default function HomePage({params}: { params: Promise<{ locale: string }> }) {
    const {locale} = use(params);
    const {t} = useTranslation();

    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (i18n.language !== locale) {
            i18n.changeLanguage(locale).then(() => setReady(true));
        } else {
            setReady(true);
        }
    }, [locale]);

    if (!ready) return null;
    return (
        <>
            <LanguageSwitcher/>
            <header>
                <Image
                    src="/images/logowaasss.png"
                    alt="Smart Garden controller"
                    width={90}
                    height={90}
                    priority
                />
                <div className="header-text">Bewässerung spezialist in Wien</div>
            </header>

            {/* HERO */}
            {/* HERO */}
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-text">
                        <h1>{t('hero.title')}</h1>
                        <Image className="hero-img" style={{position: "relative"}} src="/images/sprinkler-with-lawn.jpg"
                               alt={''} width={400} height={200}/>
                        <p className="hero-motto">{t('hero.motto')}</p>
                        <p className="hero-subline">{t('hero.subline')}</p>

                    </div>
                </div>
            </section>
            <div className="post-hero">{t('postHero')}</div>
            {/* FEATURES */}
            <h2 className="service-title">{t('serviceTitle')}</h2>
            <section className="features">
                {[1, 2, 3,].map((i) => (
                    <div className="feature-card" key={i}>
                        <Image
                            className="hero-img"
                            src={`/images/solsolar.png`}
                            alt={`Feature ${i}`}
                            width={400}
                            height={300}
                        />
                        <h2>{t(`service${i}.title`)}</h2>
                        <p>{t(`service${i}.desc`)}</p>
                    </div>
                ))}
            </section>

            {/* AUDIENCE */}
            <section className="features">
                <h2 style={{fontSize: "22px", textAlign: "center", padding: "0 2rem"}}>{t('audience.title')}</h2>

                {['residential', 'sharedYards', 'publicSpaces'].map((key) => (
                    <div className="feature-card" key={key}>
                        <Image
                            src={`/images/${key}.jpg`}
                            alt={key}
                            width={400}
                            height={300}
                        />
                        <p>{t(`audience.${key}`)}</p>
                    </div>
                ))}
            </section>

            {/* DETAILS */}
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


            {/* FOOTER */}
            <footer className="footer">
                <p>{t('footer.company')} – {t('footer.email')} – {t('footer.phone')}</p>
            </footer>
        </>
    );
}
