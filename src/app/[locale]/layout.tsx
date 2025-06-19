import {type ReactNode} from 'react';
import I18nProvider from '@/components/I18nProvider';
import '@/styles/globals.css';
import { Urbanist } from 'next/font/google';


type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};
const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // csak ha külön súlyokat akarsz
    display: 'swap',
});
export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    return (
        <html lang={locale}>
        <body className={urbanist.className}>
        <I18nProvider locale={locale}>{children}</I18nProvider>
        </body>
        </html>
    );
}


