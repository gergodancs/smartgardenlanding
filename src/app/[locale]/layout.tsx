import {type ReactNode} from 'react';
import I18nProvider from '@/components/I18nProvider';
import '@/styles/globals.css';

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    return (
        <html lang={locale}>
        <body>
        <I18nProvider locale={locale}>{children}</I18nProvider>
        </body>
        </html>
    );
}


