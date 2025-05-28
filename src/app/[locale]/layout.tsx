import I18nProvider from '@/components/I18nProvider';
import '@/styles/globals.css';
import React from 'react';

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={params.locale}>
        <body>
        <I18nProvider locale={params.locale}>{children}</I18nProvider>
        </body>
        </html>
    );
}

// 🎯 Nyelvfüggő metadata
export async function generateMetadata({ params }: { params: { locale: string } }) {
    const isGerman = params.locale === 'de';

    return {
        title: isGerman ? 'Smart Garden' : 'Smart Garden',
        description: isGerman
            ? 'Smarte Bewässerung für Ihren Garten'
            : 'Smart irrigation system for your garden',
    };
}
