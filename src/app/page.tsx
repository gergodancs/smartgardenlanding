'use client';
import { useTranslation } from 'react-i18next';
import '@/lib/i18n';

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <header className="container header">
                <h1>Smart Garden</h1>
                <p className="subtitle">{t('subtitle')}</p>
            </header>

            <main className="container main">
                <section className="features">
                    <div className="feature">
                        <h2>💧 {t('feature1.title')}</h2>
                        <p>{t('feature1.desc')}</p>
                    </div>
                    <div className="feature">
                        <h2>📱 {t('feature2.title')}</h2>
                        <p>{t('feature2.desc')}</p>
                    </div>
                    <div className="feature">
                        <h2>⚙️ {t('feature3.title')}</h2>
                        <p>{t('feature3.desc')}</p>
                    </div>
                </section>
                <button className="cta-button">{t('cta')}</button>
            </main>

            <footer className="container footer">
                <p>&copy; 2025 Smart Garden</p>
            </footer>
        </>
    );
}
