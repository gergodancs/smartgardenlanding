'use client';
import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (lng: string) => {
        const segments = pathname.split('/');
        segments[1] = lng; // Replace locale segment
        const newPath = segments.join('/');
        router.push(newPath);
    };

    return (
        <div className="language-switcher">
            <button onClick={() => changeLanguage('de')}>🇩🇪</button>
            <button onClick={() => changeLanguage('en')}>🇬🇧</button>
            <button onClick={() => changeLanguage('hu')}>🇭🇺</button>
        </div>
    );
};

export default LanguageSwitcher;
