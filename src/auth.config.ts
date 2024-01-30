import { authApiRoute, authRoute, publicRoute } from '@/lib/routes';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            // const isOnStore = nextUrl.pathname.startsWith('/store');

            const isAuthRoute = authRoute.includes(nextUrl.pathname);
            const isPublicRoute = publicRoute.includes(nextUrl.pathname);
            const isAuthApiRoute = nextUrl.pathname.startsWith(authApiRoute);

            if (isPublicRoute || isAuthApiRoute) return true;

            /**
             * If user is logged in and is on auth route, redirect to callbackUrl
             * if callbackUrl is not auth route
             * else redirect to /store
             */

            if (isLoggedIn && isAuthRoute) {
                const callbackUrl = nextUrl.searchParams.get('callbackUrl');
                if (callbackUrl) {
                    const paramUrl = new URL(callbackUrl);

                    if (paramUrl.hostname !== nextUrl.hostname) {
                        return Response.redirect(new URL('/store', nextUrl));
                    }

                    if (
                        authRoute.includes(paramUrl.pathname) ||
                        paramUrl.pathname.startsWith(authApiRoute)
                    ) {
                        return Response.redirect(new URL('/store', nextUrl));
                    }

                    if (publicRoute.includes(paramUrl.pathname)) {
                        return Response.redirect(paramUrl);
                    }

                    return Response.redirect(paramUrl);
                }

                return Response.redirect(new URL('/store', nextUrl));
            }

            if (!isLoggedIn && isAuthRoute) return true;

            if (isLoggedIn && !isAuthRoute) return true;

            // remove callbackUrl from query params to prevent infinite loop
            nextUrl.searchParams.delete('callbackUrl');

            return false;
        },

        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },

        // @ts-ignore
        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role;
                session.user.id = token.sub;
            }
            return session;
        },
    },
    providers: [
        // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
        // while this file is also used in non-Node.js environments
    ], // Add providers with an empty array for now
} satisfies NextAuthConfig;
