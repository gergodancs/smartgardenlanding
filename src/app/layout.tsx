// src/app/layout.tsx
import { ReactNode } from 'react';
import I18nProvider from '@/components/I18nProvider';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div className="main-background">
            <I18nProvider>{children}</I18nProvider>
        </div>
        </body>
        </html>
    );
}
