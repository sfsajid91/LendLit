import { getVerificationTokenByEmail } from '@/lib/data/verification-token';
import prisma from '@/lib/prisma';

export const generateVerificationToken = async (
    email: string,
    userId: string,
    deleteOld: boolean = false
) => {
    const oneDay = 24 * 60 * 60 * 1000;

    const expires = new Date(Date.now() + oneDay);

    const existingToken = await getVerificationTokenByEmail(email);

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
