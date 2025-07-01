'use client';

import React from 'react';
import './top-banner.css';
import {useTranslation} from "react-i18next";

const TopBanner = () => {
    const {t} = useTranslation();

    return (
        <div className="top-banner">
            <div className="scrolling-text">
                {t('banner.text')}
            </div>
        </div>
    );
};

export default TopBanner;
