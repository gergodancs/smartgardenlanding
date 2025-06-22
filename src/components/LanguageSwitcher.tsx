'use client';
import "./language-switcher.css"

import Link from 'next/link';
import {usePathname} from 'next/navigation';

const LanguageSwitcher = () => {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const currentLang = segments[1];

    const buildPath = (lng: string) => {
        const newSegments = [...segments];
        newSegments[1] = lng;
        return newSegments.join('/');
    };

    return (
        <div className="language-switcher">
            <Link href={buildPath('de')}>
                <button className={currentLang === 'de' ? 'active' : ''}>🇩🇪</button>
            </Link>
            <Link href={buildPath('en')}>
                <button className={currentLang === 'en' ? 'active' : ''}>🇬🇧</button>
            </Link>
        </div>
    );
};

export default LanguageSwitcher;
