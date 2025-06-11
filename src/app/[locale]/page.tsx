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

            {/* HERO */}
            {/* HERO */}
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-text">
                        <h1>{t('hero.title')}</h1>
                        <p className="hero-motto">{t('hero.motto')}</p>
                        <p className="hero-subline">{t('hero.subline')}</p>

                    </div>
                    <div className="hero-image">
                        <Image
                            src="/images/smgpics.png"
                            alt="Smart Garden controller"
                            width={400}
                            height={400}
                            priority
                        />
                    </div>

                    {/*<div className="hero-buttons">*/}
                    {/*    <button className="cta">{t('hero.cta1')}</button>*/}
                    {/*</div>*/}
                </div>
            </section>

            {/* FEATURES */}
            <section className="features">
                {[1, 2, 3, 4].map((i) => (
                    <div className="feature-card glass-card" key={i}>
                        <Image
                            src={`/images/solsolar.png`}
                            alt={`Feature ${i}`}
                            width={200}
                            height={200}
                        />
                        <h2>{t(`feature${i}.title`)}</h2>
                        <p>{t(`feature${i}.desc`)}</p>
                    </div>
                ))}
            </section>

            {/* AUDIENCE */}
            <section className="audience">
                <h2>{t('audience.title')}</h2>
                <div className="audience-grid">
                    {['balcony', 'garden', 'community', 'farm'].map((key) => (
                        <div className="audience-item glass-card" key={key}>
                            <Image
                                src={`/images/${key}.jpg`}
                                alt={key}
                                width={200}
                                height={200}
                            />
                            <h3>{t(`audience.${key}`)}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* DETAILS */}
            <section className="details">
                <h2>{t('detailsFullCard.title')}</h2>
                <p>{t('detailsFullCard.intro')}</p>
                <ul>
                    {[1, 2, 3].map((i) => (
                        <li key={i}>
                            <h4>{t(`detailsFullCard.pattern${i}.title`)}</h4>
                            <p>{t(`detailsFullCard.pattern${i}.text`)}</p>
                        </li>
                    ))}
                </ul>
                <p>{t('detailsFullCard.manual')}</p>
                <p>{t('detailsFullCard.wireless')}</p>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <p>{t('footer.company')} – {t('footer.email')} – {t('footer.phone')}</p>
            </footer>
        </>
    );
}
