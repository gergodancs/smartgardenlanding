'use client';

import {useTranslation} from 'react-i18next';
import '@/lib/i18n.client';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {use, useEffect, useState} from "react";
import i18n from '@/lib/i18n.client';
import Services from "@/components/features/Services";
import Audience from "@/components/audience/Audience";
import Details from "@/components/details/Details";
import Header from "@/components/header/Header";

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
            <Header/>
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

            <Services/>
            <Audience/>
            <Details/>
            {/* FOOTER */}
            <footer className="footer">
                <p>{t('footer.company')} – {t('footer.email')} – {t('footer.phone')}</p>
            </footer>
        </>
    );
}
