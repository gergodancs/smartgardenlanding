import React from 'react';
import Image from "next/image";
import {useTranslation} from "react-i18next";
import '../features/services.css'

const Audience = () => {
    const {t} = useTranslation();
    return (
        <>
            <h2 className="service-title">{t('audience.title')}</h2>
            <section className="features">

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
        </>
    )
}

export default Audience;