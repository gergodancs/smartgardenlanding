'use client';
import { ReactNode, useEffect } from 'react';
import i18n from '@/lib/i18n.client';

export default function I18nProvider({
                                         children,
                                         locale,
                                     }: {
    children: ReactNode;
    locale: string;
}) {
    useEffect(() => {
        if (i18n.language !== locale) {
            Promise.resolve().then(() => {
               void i18n.changeLanguage(locale);
            });
        }
    }, [locale]);

    return <>{children}</>;
}
