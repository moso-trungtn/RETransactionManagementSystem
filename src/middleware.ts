// // import createMiddleware from 'next-intl/middleware';
// // import { routing } from './i18n/routing';
// // import { NextResponse } from 'next/server';
// // import type { NextRequest } from 'next/server';
// //
// // export default createMiddleware(routing);
// //
// // // Protected routes that require authentication
// // const protectedRoutes = ['/dashboard', '/profile', '/demo-form', '/settings', '/transactions'];
// //
// // export function middleware(request: NextRequest) {
// //     const { pathname } = request.nextUrl;
// //
// //     // Check if the route is protected
// //     const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
// //
// //     if (isProtectedRoute) {
// //         // Check for session cookie
// //         const session = request.cookies.get('session');
// //
// //         if (!session) {
// //             // Redirect to home page if not authenticated
// //             return NextResponse.redirect(new URL('/', request.url));
// //         }
// //     }
// //
// //     return NextResponse.next();
// // }
// //
// // export const config = {
// //     matcher: [
// //         /*
// //          * Match all request paths except for the ones starting with:
// //          * - api (API routes)
// //          * - _next/static (static files)
// //          * - _next/image (image optimization files)
// //          * - favicon.ico (favicon file)
// //          */
// //         '/((?!api|_next/static|_next/image|favicon.ico).*)',
// //         '/', '/(vi|en)/:path*'
// //     ],
// // };
//
//
//
//
// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
//
// // Create next-intl middleware
// const intlMiddleware = createMiddleware(routing);
//
// // Protected routes WITHOUT locale prefix
// const protectedRoutes = ['/dashboard', '/profile', '/demo-form', '/settings', '/transactions'];
//
// export function middleware(request: NextRequest) {
//     // Run next-intl middleware FIRST
//     const intlResponse = intlMiddleware(request);
//     if (intlResponse) return intlResponse;
//
//     const { pathname } = request.nextUrl;
//
//
//     // Extract locale from path
//     const segments = pathname.split('/');
//     const locale = segments[1];  // e.g. /en/dashboard → 'en'
//     const pathWithoutLocale = '/' + segments.slice(2).join('/'); // → '/dashboard'
//
//     // Check if non-localized route is protected
//     const isProtected = protectedRoutes.some(route =>
//         pathWithoutLocale.startsWith(route)
//     );
//
//     if (isProtected) {
//         const session = request.cookies.get('session');
//
//         if (!session) {
//             // Redirect to locale root (keep locale)
//             return NextResponse.redirect(new URL(`/${locale}`, request.url));
//         }
//     }
//
//     return NextResponse.next();
// }
//
// export const config = {
//     matcher: [
//         // All pages except system paths
//         '/((?!api|_next/static|_next/image|favicon.ico).*)',
//         // Explicit locale matcher
//         '/(vi|en)/:path*'
//     ]
// };


import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

// Protected routes WITHOUT locale prefix
const protectedRoutes = ['/dashboard', '/profile', '/demo-form', '/settings', '/transactions'];

// Regex detect all static files
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1️⃣ Skip static files entirely
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }

    // 2️⃣ Next-intl handles locale redirects (/ → /en)
    const intlResponse = intlMiddleware(request);
    if (intlResponse) return intlResponse;

    // 3️⃣ Protected routes (with locale prefix)
    const segments = pathname.split('/');
    const locale = segments[1];
    const pathWithoutLocale = '/' + segments.slice(2).join('/');

    const isProtected = protectedRoutes.some(route =>
        pathWithoutLocale.startsWith(route)
    );

    if (isProtected) {
        const session = request.cookies.get('session');

        if (!session) {
            return NextResponse.redirect(new URL(`/${locale}`, request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|api|.*\\..*).*)'], // ✔ skip all files with extension
};
