import React from 'react'
import './footer.css'
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className="footer">
            <p>{t('footer.company')} – {t('footer.email')} – {t('footer.phone')}</p>
        </footer>
    )
}
export default  Footer;