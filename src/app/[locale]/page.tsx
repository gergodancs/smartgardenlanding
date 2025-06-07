'use client';

import { useTranslation } from 'react-i18next';
import '@/lib/i18n.client';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <LanguageSwitcher />

            {/* HERO */}
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-text">
                        <h1>Smart Garden</h1>
                        <p>{t('subtitle')}</p>
                        <button className="cta">{t('cta')}</button>
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
                </div>
            </section>

            {/* FEATURES */}
            <section className="features">
                {[1, 2, 3, 4].map((i) => (
                    <div className="feature-card" key={i}>
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
                        <div className="audience-item" key={key}>
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
