'use client';

import '@/lib/i18n.client';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {use, useEffect, useState} from "react";
import i18n from '@/lib/i18n.client';
import Services from "@/components/features/Services";
import Audience from "@/components/audience/Audience";
import Details from "@/components/details/Details";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import Packages from "@/components/packages/Packages";

export default function HomePage({params}: { params: Promise<{ locale: string }> }) {
    const {locale} = use(params);

    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (i18n.language !== locale) {
            i18n.changeLanguage(locale).then(() => setReady(true));
        } else {
            setReady(true);
        }
    }, [locale]);

    if (!ready) return null;
    return (
        <>
            <LanguageSwitcher/>
            <Header/>
            <Hero/>
            <Audience/>
            <Services/>
            <Packages/>
            <Details/>
            <Footer/>
        </>
    );
}
