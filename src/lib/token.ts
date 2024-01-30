import { getValidPasswordResetTokenByEmail } from '@/lib/data/passwordreset-token';
import { getValidVerificationTokenByEmail } from '@/lib/data/verification-token';
import prisma from '@/lib/prisma';

export const generateVerificationToken = async (
    email: string,
    userId: string,
    deleteOld: boolean = false
) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const expires = new Date(Date.now() + oneDay);

    const existingToken = await getValidVerificationTokenByEmail(email);

    if (existingToken && !deleteOld) {
        return { token: existingToken, newToken: false };
    }

    if (existingToken && deleteOld) {
        await prisma.verificationToken.delete({
            where: {
                id: existingToken.id,
            },
        });
    }

    const verficationToken = await prisma.verificationToken.create({
        data: {
            email,
            expires,
            userId,
        },
    });

    return {
        token: verficationToken,
        newToken: true,
    };
};

export const generatePasswordResetToken = async (
    email: string,
    userId: string,
    deleteOld: boolean = false
) => {
    const thirtyMinutes = 30 * 60 * 1000;
    const expires = new Date(Date.now() + thirtyMinutes);

    const existingToken = await getValidPasswordResetTokenByEmail(email);

    if (existingToken && !deleteOld) {
        return { token: existingToken, newToken: false };
    }

    if (existingToken && deleteOld) {
        await prisma.passwordResetToken.delete({
            where: {
                id: existingToken.id,
            },
        });
    }

    const passwordResetToken = await prisma.passwordResetToken.create({
        data: {
            email,
            expires,
            userId,
        },
    });

    return {
        token: passwordResetToken,
        newToken: true,
    };
};
