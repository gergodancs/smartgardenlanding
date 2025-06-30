import React from 'react';
import {useTranslation} from 'react-i18next';
import '../features/services.css';

const Packages = () => {
    const {t} = useTranslation();
    const packageList = ['basic', 'comfort', 'premium', 'spring', 'care', 'vacation'];

    return (
        <>
            <h2 className="service-title">{t('packages.title')}</h2>
            <p style={{textAlign: 'center', marginBottom: '2rem',fontSize: "18px"}}>{t('packages.desc')}</p>
            <section className="packages features">
                {packageList.map((key) => (
                    <div className="feature-card" key={key}>
                        <h2>{t(`packages.${key}.title`)}</h2>
                        <p style={{fontSize: "18px"}}>{t(`packages.${key}.desc`)}</p>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Packages;
