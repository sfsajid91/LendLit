import { authConfig } from '@/auth.config';
import { getUserByEmail, getUserById } from '@/lib/data/user';
import prisma from '@/lib/prisma';
import { prismaAdapter } from '@/lib/prismaAdapter';
import { signinSchema } from '@/lib/schema/signinSchema';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                const parsedCredentials = signinSchema.safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUserByEmail(email);

                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (!passwordsMatch) return null;

                    return user;
                }

                return null;
            },
        }),
    ],
    events: {
        async linkAccount({ user, profile }) {
            const data = { emailVerified: new Date(), image: user.image };
            if (!user.image && profile.image) data.image = profile.image;
            await prisma.user.update({
                where: { id: user.id },
                data,
            });
        },
    },
    callbacks: {
        ...authConfig.callbacks,
        async signIn({ account, user }) {
            // Allow OAuth without email verification
            if (account?.provider !== 'credentials') return true;

            const existingUser = await getUserById(user.id as string);

            // Prevent sign in without email verification
            if (!existingUser?.emailVerified) return false;
            return true;
        },
    },
    session: { strategy: 'jwt' },

    adapter: prismaAdapter,
});
