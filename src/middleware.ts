import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'de', 'hu'];
const defaultLocale = 'de';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Már lokalizált? Ne csináljunk semmit
    if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
        return;
    }

    // Átirányítás az alapértelmezett nyelvre
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
}

// 👇 EZ IDE JÖN:
export const config = {
    matcher: ['/((?!_next|favicon.ico|images|.*\\..*).*)'],
};
