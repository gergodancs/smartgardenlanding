'use client';
import {useTranslation} from 'react-i18next';
import '@/lib/i18n';
import Image from 'next/image';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {useRef} from "react";
import CarouselComponent from "@/components/CarouselComponent";


export default function HomePage() {
    const {t} = useTranslation();

    const featureRef = useRef<HTMLDivElement | null>(null);

    const scrollToFeatures = () => {
        featureRef.current?.scrollIntoView({behavior: 'smooth'});
    };


    return (
        <>
            <LanguageSwitcher/>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Smart Garden</h1>
                        <p>{t('subtitle')}</p>
                        <button className="cta-button" onClick={scrollToFeatures}>
                            {t('cta')}
                        </button>
                    </div>
                    <div className="hero-image">
                        <Image
                            src="/images/wifi2.png"
                            alt="Smart garden illustration"
                            width={400}
                            height={400}
                            priority
                        />
                    </div>

                </div>
                <p className="post-image-text">{t('postImage')}</p>
            </section>

            <CarouselComponent />

            <main className="container main">
                <section className="features" ref={featureRef}>
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div className="feature" key={i}>
                            <h2>{t(`feature${i}.title`)}</h2>
                            <p>{t(`feature${i}.desc`)}</p>
                        </div>
                    ))}
                </section>

                {/*<button className="cta-button" onClick={scrollToDetails}>*/}
                {/*    {t('details-button')}*/}
                {/*</button>*/}

            </main>
            <section className="features">
                <div className="feature">
                    <h3>{t('detailsFullCard.title')}</h3>
                    <p>{t('detailsFullCard.intro')}</p>
                    <p><strong>{t('detailsFullCard.patternsTitle')}</strong></p>
                    <ul>
                        <li>
                            <h4>{t('detailsFullCard.pattern1.title')}</h4>
                            <p>{t('detailsFullCard.pattern1.text')}</p>
                        </li>
                        <li>
                            <h4>{t('detailsFullCard.pattern2.title')}</h4>
                            <p>{t('detailsFullCard.pattern2.text')}</p>
                        </li>
                        <li>
                            <h4>{t('detailsFullCard.pattern3.title')}</h4>
                            <p>{t('detailsFullCard.pattern3.text')}</p>
                        </li>
                    </ul>
                    <p>{t('detailsFullCard.manual')}</p>
                    <p>{t('detailsFullCard.wireless')}</p>
                </div>
            </section>


            <footer className="footer container">
                <div className="footer-content">
                    <p>{t('footer.company')}</p>
                    <p>{t('footer.email')}</p>
                    <p>{t('footer.phone')}</p>
                </div>
            </footer>

        </>
    );
}
