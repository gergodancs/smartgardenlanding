// src/components/I18nProvider.tsx
'use client';
import '@/lib/i18n'; // csak itt fusson le
import { ReactNode } from 'react';

export default function I18nProvider({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
