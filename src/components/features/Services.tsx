import React from "react";
import Image from "next/image";
import {useTranslation} from "react-i18next";
import "./services.css"

const Services = () => {
    const {t} = useTranslation();
    return (
        <>
            <h2 className="service-title">{t('serviceTitle')}</h2>
            <section className="features">
                {[1, 2, 3,].map((i) => (
                    <div className="feature-card" key={i}>
                        <Image
                            className="service-img"
                            src={`/images/service${i}.png`}
                            alt={`Feature ${i}`}
                            width={400}
                            height={300}
                        />
                        <h2>{t(`service${i}.title`)}</h2>
                        <p>{t(`service${i}.desc`)}</p>
                    </div>
                ))}
            </section>
        </>

    )
}

export default Services;