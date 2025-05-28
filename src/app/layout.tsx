// src/app/layout.tsx
import {ReactNode} from 'react';
import I18nProvider from '@/components/I18nProvider';
import '@/styles/globals.css';

export const metadata = {
    title: 'Smart Garden',
    description: 'Smarte Bewässerung für Ihren Garten',
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>Smart Garden</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>

            <I18nProvider>{children}</I18nProvider>

        </body>
        </html>
    );
}
