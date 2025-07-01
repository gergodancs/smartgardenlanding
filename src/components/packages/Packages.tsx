'use client';
import React from 'react';
import {useTranslation} from 'react-i18next';
import '../features/services.css';
import './packages.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Packages = () => {
    const {t} = useTranslation();
    const packageList = ['basic', 'comfort', 'premium', 'spring', 'care', 'vacation'];

    return (
        <>
            <h2 className="service-title">{t('packages.title')}</h2>
            <p style={{textAlign: 'center', marginBottom: '2rem', fontSize: '18px'}}>{t('packages.desc')}</p>

            {/* Desktop Grid */}
            <section className="packages features desktop-only">
                {packageList.map((key) => (
                    <div className="feature-card" key={key}>
                        <h2>{t(`packages.${key}.title`)}</h2>
                        <p style={{fontSize: '18px'}}>{t(`packages.${key}.desc`)}</p>
                    </div>
                ))}
            </section>

            {/* Mobile Swiper */}
            <section className="mobile-only" style={{padding: '1rem'}}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                >
                    {packageList.map((key) => (
                        <SwiperSlide key={key}>
                            <div className="package-card">
                                <h2>{t(`packages.${key}.title`)}</h2>
                                <p style={{fontSize: '16px'}}>{t(`packages.${key}.desc`)}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default Packages;
