'use client';
import {useTranslation} from 'react-i18next';

export default function LanguageSwitcher() {
    const {i18n} = useTranslation();
    const currentLang = i18n.language;

    const changeLanguage = (lng: string) => {
        void i18n.changeLanguage(lng);
        localStorage.setItem('lng', lng);
    };

    return (
        <div className="language-switcher">
            <button
                onClick={() => changeLanguage('en')}
                className={currentLang === 'en' ? 'active' : ''}
                title="English"
            >
                🇬🇧
            </button>
            <button
                onClick={() => changeLanguage('de')}
                className={currentLang === 'de' ? 'active' : ''}
                title="Deutsch"
            >
                🇩🇪
            </button>
        </div>
    );
}
